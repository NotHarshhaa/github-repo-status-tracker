#!/usr/bin/env tsx
/**
 * README Generator
 * 
 * Generates the auto-updated section of README.md from github-repos.json
 */

import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

interface RepoData {
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

const GH_USERNAME = 'NotHarshhaa'

function formatNumber(value: number): string {
  return value.toLocaleString()
}

function formatCiLabel(status: string): string {
  const map: Record<string, string> = {
    pass: 'Pass',
    fail: 'Fail',
    running: 'Running',
    none: '—',
  }
  return map[status] || '—'
}

function truncateText(text: string, maxLen: number): string {
  if (text.length <= maxLen) return text
  return text.slice(0, maxLen - 3).trimEnd() + '...'
}

function normalizeDescription(text: string, maxLen = 140): string {
  if (!text || !text.trim()) return 'No description provided.'
  const cleaned = text.normalize('NFKC').replace(/\s+/g, ' ').trim()
  if (cleaned.length > maxLen) {
    return cleaned.slice(0, maxLen - 3).trimEnd() + '...'
  }
  return cleaned || 'No description provided.'
}

function generateSummaryTable(repos: RepoData[]): string {
  const rows = repos.map((repo, index) => 
    `| ${index + 1} | [${repo.repo}](${repo.url}) | ${formatNumber(repo.stars)} | ${formatNumber(repo.forks)} | ${formatNumber(repo.issues)} | ${formatCiLabel(repo.ci_cd_status)} | ${repo.last_updated} |`
  )
  return [
    '| # | Repository | Stars | Forks | Issues | CI | Updated |',
    '|:--:|------------|------:|------:|-------:|:--:|---------|',
    ...rows,
  ].join('\n')
}

function generateRepoDetails(repo: RepoData): string {
  const description = normalizeDescription(repo.description)
  const commitMessage = truncateText(repo.commit_message, 90)
  const languages = repo.languages.length > 0 
    ? repo.languages.slice(0, 5).map(l => `\`${l}\``).join(' · ')
    : '_None detected_'
  const topics = repo.topics.length > 0
    ? repo.topics.slice(0, 6).map(t => `\`${t}\``).join(' · ')
    : '_None_'

  return `<!-- repo:${repo.repo} -->
<details>
<summary>
  <strong><a href="${repo.url}">${repo.repo}</a></strong>
  &nbsp;·&nbsp; ⭐ ${formatNumber(repo.stars)}
  &nbsp;·&nbsp; 🍴 ${formatNumber(repo.forks)}
  &nbsp;·&nbsp; CI ${formatCiLabel(repo.ci_cd_status)}
  <br><sub>${description}</sub>
</summary>
<br>

![Stars](https://img.shields.io/github/stars/${GH_USERNAME}/${repo.repo}?style=flat-square)
![Forks](https://img.shields.io/github/forks/${GH_USERNAME}/${repo.repo}?style=flat-square)
![Issues](https://img.shields.io/github/issues/${GH_USERNAME}/${repo.repo}?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/${GH_USERNAME}/${repo.repo}?style=flat-square)

| | |
|---|---|
| **Latest commit** | [${commitMessage}](${repo.latest_commit}) |
| **Commit date** | \`${repo.commit_date}\` |
| **Author** | \`${repo.author}\` |
| **Repo updated** | \`${repo.last_updated}\` |
| **License** | \`${repo.license}\` |
| **Languages** | ${languages} |
| **Topics** | ${topics} |

</details>`
}

function generateRepoSection(repos: RepoData[]): string {
  if (repos.length === 0) return 'No repository data available.'

  const totalStars = repos.reduce((sum, r) => sum + r.stars, 0)
  const totalForks = repos.reduce((sum, r) => sum + r.forks, 0)
  const totalIssues = repos.reduce((sum, r) => sum + r.issues, 0)

  const overview = `> **${repos.length}** repositories · **${formatNumber(totalStars)}** stars · **${formatNumber(totalForks)}** forks · **${formatNumber(totalIssues)}** open issues`
  const table = generateSummaryTable(repos)
  const details = repos.map(generateRepoDetails).join('\n\n')

  return [overview, '### Quick overview', table, '### Repository details', '<sub>Click a repository to expand commit info, languages, and topics.</sub>', details].join('\n\n')
}

function buildReadmeHeader(repoCount: number, totalStars: number): string {
  const timestamp = new Date().toISOString().replace('T', ' ').replace('Z', ' UTC').replace(':', '%3A').replace(' ', '%20')
  const badge = `![Last Updated](https://img.shields.io/badge/Last%20Updated-${timestamp}-blue?style=flat-square)`

  return `${badge}

# GitHub Repository Status Tracker

Live status dashboard for [@${GH_USERNAME}](https://github.com/${GH_USERNAME}) repositories.
Updates automatically every 6 hours via GitHub Actions.

**${repoCount}** repositories tracked · **${formatNumber(totalStars)}** combined stars

---`
}

function main() {
  const dataPath = join(__dirname, '..', 'data', 'github-repos.json')
  const readmePath = join(__dirname, '..', 'README.md')

  if (!existsSync(dataPath)) {
    console.error('❌ github-repos.json not found. Run fetch-github-data.ts first.')
    process.exit(1)
  }

  const repos: RepoData[] = JSON.parse(readFileSync(dataPath, 'utf8'))
  console.log(`📖 Loaded ${repos.length} repositories from data`)

  const totalStars = repos.reduce((sum, r) => sum + r.stars, 0)
  const repoSection = generateRepoSection(repos)
  const header = buildReadmeHeader(repos.length, totalStars)

  const startMarker = '<!-- START_REPO_STATUS -->'
  const endMarker = '<!-- END_REPO_STATUS -->'

  let readmeContent = ''
  if (existsSync(readmePath)) {
    readmeContent = readFileSync(readmePath, 'utf8')
  }

  let updatedContent: string
  if (readmeContent.includes(startMarker) && readmeContent.includes(endMarker)) {
    const afterMarker = readmeContent.split(endMarker)[1]
    updatedContent = `${header}\n\n${startMarker}\n${repoSection}\n${endMarker}${afterMarker}`
  } else {
    updatedContent = `${header}\n\n${startMarker}\n${repoSection}\n${endMarker}\n`
  }

  writeFileSync(readmePath, updatedContent)
  console.log(`✅ README.md updated with ${repos.length} repositories`)
}

async function runMain(): Promise<void> {
  main()
}

runMain().catch((err: Error) => {
  console.error('❌ Fatal error:', err)
  process.exit(1)
})