// update-repo-meta.js — fetches GitHub metadata for repos listed in repos.json
const fs = require('fs');

function loadEnv() {
  try {
    fs.readFileSync('.env', 'utf8')
      .split('\n')
      .filter((line) => line.trim() && !line.startsWith('#'))
      .forEach((line) => {
        const [key, ...valueParts] = line.split('=');
        const value = valueParts.join('=').trim();
        if (!process.env[key.trim()]) {
          process.env[key.trim()] = value;
        }
      });
  } catch {
    // .env is optional
  }
}

function loadRepos(configFile = 'repos.json') {
  const config = JSON.parse(fs.readFileSync(configFile, 'utf8'));
  if (!Array.isArray(config.repositories)) {
    throw new Error(`Invalid config: expected "repositories" array in ${configFile}`);
  }
  return [...new Set(config.repositories)];
}

loadEnv();

const githubUsername = process.env.GH_USERNAME || 'NotHarshhaa';
const configFile = process.env.CONFIG_FILE || 'repos.json';
const token = process.env.GH_TOKEN;
const headers = token ? { Authorization: `Bearer ${token}` } : {};
const CONCURRENCY = 5;

async function fetchLastCommitSHA(owner, repo, defaultBranch) {
  const commitsUrl = `https://api.github.com/repos/${owner}/${repo}/commits?sha=${defaultBranch}&per_page=1`;
  const res = await fetch(commitsUrl, { headers });

  if (!res.ok) {
    console.warn(`Failed to fetch commits for ${repo}: ${res.statusText}`);
    return null;
  }

  const commits = await res.json();
  return commits[0]?.sha || null;
}

async function fetchRepoMetadata(repo) {
  const repoUrl = `https://api.github.com/repos/${githubUsername}/${repo}`;
  const res = await fetch(repoUrl, { headers });

  if (!res.ok) {
    console.warn(`Failed to fetch ${repo}: ${res.statusText}`);
    return null;
  }

  const data = await res.json();
  const lastCommit = await fetchLastCommitSHA(githubUsername, repo, data.default_branch);

  return {
    repo,
    stars: data.stargazers_count,
    forks: data.forks_count,
    issues: data.open_issues_count,
    lastUpdated: data.updated_at,
    lastCommit,
  };
}

async function fetchAllWithConcurrency(repos) {
  const results = [];
  for (let i = 0; i < repos.length; i += CONCURRENCY) {
    const batch = repos.slice(i, i + CONCURRENCY);
    const batchResults = await Promise.all(batch.map(fetchRepoMetadata));
    results.push(...batchResults.filter(Boolean));
  }
  return results;
}

async function updateAllRepos() {
  const repos = loadRepos(configFile);
  console.log(`Fetching metadata for ${repos.length} repositories from ${configFile}...`);
  const results = await fetchAllWithConcurrency(repos);
  fs.writeFileSync('repo-metadata.json', JSON.stringify(results, null, 2));
  console.log(`Metadata written to repo-metadata.json (${results.length}/${repos.length} repos)`);
}

updateAllRepos().catch((err) => {
  console.error(err);
  process.exit(1);
});
