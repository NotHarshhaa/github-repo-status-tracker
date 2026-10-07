#!/usr/bin/env tsx
/**
 * Unified GitHub Data Fetcher
 * 
 * Single source of truth for fetching repository metadata from GitHub API.
 * Outputs to data/github-repos.json which is consumed by:
 * - scripts/generate-readme.ts (for README.md)
 * - scripts/generate-projects-data.ts (for projects-data.ts)
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Load .env if exists
try {
  const envContent = readFileSync(join(__dirname, '..', '.env'), 'utf8')
  envContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=')
    if (key && !key.startsWith('#')) {
      process.env[key.trim()] = valueParts.join('=').trim()
    }
  })
} catch {
  // .env is optional
}

interface GitHubRepo {
  name: string
  html_url: string
  description: string | null
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  updated_at: string
  default_branch: string
  license: { name: string } | null
  topics: string[]
  languages_url: string
  watchers_count: number
}

interface GitHubCommit {
  sha: string
  commit: {
    author: {
      name: string
      date: string
    }
    message: string
  }
}

interface GitHubWorkflowRun {
  conclusion: string | null
}

interface GitHubLanguages {
  [key: string]: number
}

interface RepoMetadata {
  repo: string
  url: string
  description: string
  last_updated: string
  latest_commit: string
  commit_sha: string | null
  commit_date: string
  commit_message: string
  author: string
  issues: number
  stars: number
  forks: number
  watchers: number
  ci_cd_status: 'pass' | 'fail' | 'running' | 'none'
  languages: string[]
  license: string
  topics: string[]
  raw_updated_at: string
}

const GH_USERNAME = process.env.GH_USERNAME || 'NotHarshhaa'
const GH_TOKEN = process.env.GH_TOKEN
const CONCURRENCY = 8
const API_TIMEOUT = 10000
const MAX_RETRIES = 3
const RETRY_DELAY = 1000

const headers: Record<string, string> = {
  Accept: 'application/vnd.github.v3+json',
  'User-Agent': 'GitHub-Repo-Status-Tracker',
}
if (GH_TOKEN) {
  headers.Authorization = `Bearer ${GH_TOKEN}`
}

async function fetchWithRetry(url: string, retries = MAX_RETRIES): Promise<Response> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT)

    try {
      const response = await fetch(url, { headers, signal: controller.signal })
      clearTimeout(timeoutId)

      if (response.status === 403 && response.headers.get('x-ratelimit-remaining') === '0') {
        const resetTime = parseInt(response.headers.get('x-ratelimit-reset') || '0', 10)
        const waitTime = Math.max(resetTime * 1000 - Date.now(), 0) + 5000
        console.warn(`Rate limited. Waiting ${Math.ceil(waitTime / 1000)}s...`)
        await new Promise(r => setTimeout(r, waitTime))
        continue
      }

      if (response.status === 404) {
        return response
      }

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      return response
    } catch (error) {
      clearTimeout(timeoutId)
      if (attempt === retries) throw error
      const delay = RETRY_DELAY * attempt
      console.warn(`Attempt ${attempt} failed: ${error}. Retrying in ${delay}ms...`)
      await new Promise(r => setTimeout(r, delay))
    }
  }
  throw new Error('Max retries exceeded')
}

async function fetchRepoMetadata(repo: string): Promise<RepoMetadata | null> {
  try {
    // Fetch repo info
    const repoResponse = await fetchWithRetry(`https://api.github.com/repos/${GH_USERNAME}/${repo}`)
    if (repoResponse.status === 404) {
      console.warn(`Repository not found: ${repo}`)
      return null
    }
    const repoData: GitHubRepo = await repoResponse.json()

    // Fetch latest commit
    let commitSha: string | null = null
    let commitDate = 'Unknown'
    let commitMessage = 'No commits found'
    let commitAuthor = 'Unknown'
    let latestCommitUrl = `https://github.com/${GH_USERNAME}/${repo}/commits`

    try {
      const commitsResponse = await fetchWithRetry(
        `https://api.github.com/repos/${GH_USERNAME}/${repo}/commits?sha=${repoData.default_branch}&per_page=1`
      )
      if (commitsResponse.ok) {
        const commits: GitHubCommit[] = await commitsResponse.json()
        if (commits.length > 0) {
          commitSha = commits[0].sha
          latestCommitUrl = `https://github.com/${GH_USERNAME}/${repo}/commit/${commitSha}`
          commitDate = commits[0].commit.author.date.split('T')[0]
          commitAuthor = commits[0].commit.author.name
          commitMessage = commits[0].commit.message.split('\n')[0]
        }
      }
    } catch {
      console.warn(`Failed to fetch commits for ${repo}`)
    }

    // Fetch CI/CD status (latest workflow run)
    let ciCdStatus: RepoMetadata['ci_cd_status'] = 'none'
    try {
      const runsResponse = await fetchWithRetry(
        `https://api.github.com/repos/${GH_USERNAME}/${repo}/actions/runs?per_page=1`
      )
      if (runsResponse.ok) {
        const runsData = await runsResponse.json()
        if (runsData.total_count > 0) {
          const conclusion = runsData.workflow_runs[0].conclusion
          if (conclusion === 'success') ciCdStatus = 'pass'
          else if (conclusion === 'failure') ciCdStatus = 'fail'
          else if (conclusion) ciCdStatus = 'running'
        }
      }
    } catch {
      console.warn(`Failed to fetch workflow runs for ${repo}`)
    }

    // Fetch languages
    let languages: string[] = []
    try {
      const langResponse = await fetchWithRetry(repoData.languages_url)
      if (langResponse.ok) {
        const langData: GitHubLanguages = await langResponse.json()
        languages = Object.keys(langData).slice(0, 5)
      }
    } catch {
      console.warn(`Failed to fetch languages for ${repo}`)
    }

    const updatedAt = new Date(repoData.updated_at)
    const formattedDate = updatedAt.toISOString().split('T')[0]
    const licenseName = repoData.license?.name || 'No license'

    return {
      repo,
      url: repoData.html_url,
      description: repoData.description || 'No description provided',
      last_updated: formattedDate,
      latest_commit: latestCommitUrl,
      commit_sha: commitSha,
      commit_date: commitDate,
      commit_message: commitMessage,
      author: commitAuthor,
      issues: repoData.open_issues_count,
      stars: repoData.stargazers_count,
      forks: repoData.forks_count,
      watchers: repoData.watchers_count,
      ci_cd_status: ciCdStatus,
      languages,
      license: licenseName,
      topics: repoData.topics || [],
      raw_updated_at: repoData.updated_at,
    }
  } catch (error) {
    console.error(`Error fetching ${repo}:`, error)
    return null
  }
}

async function fetchAllRepos(repos: string[]): Promise<RepoMetadata[]> {
  const results: RepoMetadata[] = []
  
  for (let i = 0; i < repos.length; i += CONCURRENCY) {
    const batch = repos.slice(i, i + CONCURRENCY)
    console.log(`Fetching batch ${Math.floor(i / CONCURRENCY) + 1}/${Math.ceil(repos.length / CONCURRENCY)} (${batch.length} repos)...`)
    
    const batchResults = await Promise.all(batch.map(fetchRepoMetadata))
    const valid = batchResults.filter((r): r is RepoMetadata => r !== null)
    results.push(...valid)
    
    console.log(`  Completed: ${valid.length}/${batch.length} successful`)
  }
  
  return results
}

function loadRepos(): string[] {
  const configPath = join(__dirname, '..', process.env.CONFIG_FILE || 'repos.json')
  const config = JSON.parse(readFileSync(configPath, 'utf8'))
  if (!Array.isArray(config.repositories)) {
    throw new Error('Invalid config: expected "repositories" array')
  }
  return [...new Set(config.repositories as string[])]
}

function deduplicateByRepo(repos: RepoMetadata[]): RepoMetadata[] {
  const seen = new Map<string, RepoMetadata>()
  for (const repo of repos) {
    const existing = seen.get(repo.repo)
    if (!existing || existing.raw_updated_at < repo.raw_updated_at) {
      seen.set(repo.repo, repo)
    }
  }
  return Array.from(seen.values())
}

async function main() {
  console.log('🚀 Starting GitHub Repository Data Fetch')
  console.log(`📦 Username: ${GH_USERNAME}`)
  console.log(`🔑 Token: ${GH_TOKEN ? 'Set' : 'Not set (rate limited)'}`)
  
  const repos = loadRepos()
  console.log(`📋 Loaded ${repos.length} repositories from config`)
  
  const metadata = await fetchAllRepos(repos)
  console.log(`✅ Fetched ${metadata.length} repositories successfully`)
  
  const deduplicated = deduplicateByRepo(metadata)
  console.log(`🔄 After deduplication: ${deduplicated.length} repositories`)
  
  // Sort by stars descending
  deduplicated.sort((a, b) => b.stars - a.stars)
  
  // Output to data/github-repos.json
  const outputDir = join(__dirname, '..', 'data')
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true })
  }
  
  const outputPath = join(outputDir, 'github-repos.json')
  writeFileSync(outputPath, JSON.stringify(deduplicated, null, 2))
  console.log(`💾 Written to ${outputPath}`)
  
  // Summary
  const totalStars = deduplicated.reduce((sum, r) => sum + r.stars, 0)
  const totalForks = deduplicated.reduce((sum, r) => sum + r.forks, 0)
  const totalIssues = deduplicated.reduce((sum, r) => sum + r.issues, 0)
  console.log(`\n📊 Summary:`)
  console.log(`   Repositories: ${deduplicated.length}`)
  console.log(`   Total Stars: ${totalStars.toLocaleString()}`)
  console.log(`   Total Forks: ${totalForks.toLocaleString()}`)
  console.log(`   Total Issues: ${totalIssues.toLocaleString()}`)
}

main().catch(err => {
  console.error('❌ Fatal error:', err)
  process.exit(1)
})