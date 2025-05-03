// update-repo-meta.js
const fs = require('fs');

// Your GitHub username
const githubUsername = 'NotHarshhaa';

// List of repo names (just the last part of the URL)
const repos = [
  "devops-tools",
  "Certified_Kubernetes_Administrator",
  "kubernetes-dashboard",
  "DevOps-Projects",
  "kubernetes-projects-learning",
  "AWS-EKS_Terraform",
  "Deployment-of-super-Mario-on-Kubernetes-using-terraform",
  "cloud-native-monitoring-app",
  "Zomato-Clone",
  "Learning-Prometheus",
  "Kubernetes",
  "DevOps_Setup-Installations",
  "DevOps-Tool-Installer",
  "kubernetes-learning-path",
  "Jenkins-Terraform-AWS-Infra",
  "azure-all_in_one",
  "aws-billing-alert-terraform",
  "AWS-DevOps_Real-Time_Deployment",
  "devops-cheatsheet",
  "DevOps-Interview-Questions",
  "into-the-devops",
  "AWS-Terraform-Workshop",
  "tf-ecr-ecs-gh-deploy",
  "eks-cluster-terraform",
  "CI-CD_EKS-GitHub_Actions",
  "uber-clone"
];

// GitHub token (optional, use env var to avoid rate limits)
const token = process.env.GH_TOKEN;

const headers = token ? { Authorization: `token ${token}` } : {};

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
    lastCommit // <-- now a SHA
  };
}

async function updateAllRepos() {
  const results = [];

  for (const repo of repos) {
    const meta = await fetchRepoMetadata(repo);
    if (meta) results.push(meta);
  }

  fs.writeFileSync('repo-metadata.json', JSON.stringify(results, null, 2));
  console.log('Metadata written to repo-metadata.json');
}

updateAllRepos();
