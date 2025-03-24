import requests
import os
import json

# GitHub Username & Token (Use Secrets for security)
GH_USERNAME = "NotHarshhaa"
GH_TOKEN = os.getenv("GH_TOKEN")  # Set this in GitHub Secrets

# GitHub API Base URL
API_URL = "https://api.github.com/repos/{}/{}"

def load_repos():
    """Load repository list from repos.json"""
    with open("repos.json", "r", encoding="utf-8") as file:
        return json.load(file)["repositories"]

def fetch_repo_status(repo):
    """Fetch repository details from GitHub API"""
    url = API_URL.format(GH_USERNAME, repo)
    response = requests.get(url, auth=(GH_USERNAME, GH_TOKEN))
    
    if response.status_code == 200:
        data = response.json()
        latest_commit_data = requests.get(data["commits_url"].replace("{/sha}", ""), auth=(GH_USERNAME, GH_TOKEN)).json()[0]
        commit_message = latest_commit_data["commit"]["message"]
        commit_author = latest_commit_data["commit"]["author"]["name"]

        return {
            "name": repo,
            "url": data["html_url"],
            "last_updated": data["updated_at"].split("T")[0],
            "latest_commit": commit_message,
            "author": commit_author,
            "issues": data["open_issues_count"],
            "stars": data["stargazers_count"],
            "forks": data["forks_count"],
            "ci_cd_status": "✅"
        }
    return None

def generate_markdown(repos_data):
    """Generate README content in a structured format"""
    md_content = "# 🚀 GitHub Repository Status Tracker\n\n"
    md_content += "This page automatically updates with the latest commit details.\n\n---\n"

    for repo in repos_data:
        md_content += f"""
## 📂 [{repo['name']}]({repo['url']})
🗓 **Last Updated:** `{repo['last_updated']}`  
🔄 **Latest Commit:**  
> _{repo['latest_commit']}_

👤 **Author:** `{repo['author']}`  

🔗 [View Repository]({repo['url']}) | 🏷 **Issues/PRs:** `{repo['issues']}`  
⭐ **Stars:** `{repo['stars']}` | 🍴 **Forks:** `{repo['forks']}` | {repo['ci_cd_status']} **CI/CD Status**  

---
"""
    return md_content

if __name__ == "__main__":
    repositories = load_repos()
    repo_statuses = [fetch_repo_status(repo) for repo in repositories if fetch_repo_status(repo)]
    
    readme_content = generate_markdown(repo_statuses)

    # Write to README.md
    with open("README.md", "w", encoding="utf-8") as file:
        file.write(readme_content)

    print("✅ README.md updated successfully!")
