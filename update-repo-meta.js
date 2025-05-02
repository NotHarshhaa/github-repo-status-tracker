// update-repo-meta.js
const fs = require('fs');

// Your GitHub username (change if needed)
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

// Optional: Add GitHub token to avoid rate limits (use environment variable)
const token = process.env.GH_TOKEN;

const headers = token
  ? { Authorization: `token ${token}` }
  : {};

async function fetchRepoMetadata(repo) {
  const url = `https://api.github.com/repos/${githubUsername}/${repo}`;
  const res = await fetch(url, { headers });

  if (!res.ok) {
    console.warn(`Failed to fetch ${repo}: ${res.statusText}`);
    return null;
  }

  const data = await res.json();
  return {
    repo,
    stars: data.stargazers_count,
    forks: data.forks_count,
    issues: data.open_issues_count,
    lastUpdated: data.updated_at
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
