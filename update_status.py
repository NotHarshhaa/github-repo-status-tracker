from datetime import datetime
import requests
import os
import json

GH_USERNAME = "NotHarshhaa"
GH_TOKEN = os.getenv("GH_TOKEN")

API_URL = "https://api.github.com/repos/{}/{}"
BADGE_TEMPLATE = "![Last Updated](https://img.shields.io/badge/Last%20Updated-{}-blue?style=flat-square)"

def load_repos():
    with open("repos.json", "r", encoding="utf-8") as file:
        return json.load(file)["repositories"]

def fetch_repo_status(repo):
    url = API_URL.format(GH_USERNAME, repo)
    response = requests.get(url, auth=(GH_USERNAME, GH_TOKEN))

    if response.status_code == 200:
        data = response.json()

        commits_url = f"https://api.github.com/repos/{GH_USERNAME}/{repo}/commits?per_page=1&page=1"
        latest_commit_data = requests.get(commits_url, auth=(GH_USERNAME, GH_TOKEN)).json()

        if latest_commit_data:
            commit_sha = latest_commit_data[0]["sha"]
            commit_url = f"https://github.com/{GH_USERNAME}/{repo}/commit/{commit_sha}"
            commit_author = latest_commit_data[0]["commit"]["author"]["name"]
        else:
            commit_url = "No commits found"
            commit_author = "Unknown"

        return {
            "name": repo,
            "url": data["html_url"],
            "last_updated": data["updated_at"].split("T")[0],
            "latest_commit": commit_url,
            "author": commit_author,
            "issues": data["open_issues_count"],
            "stars": data["stargazers_count"],
            "forks": data["forks_count"],
            "ci_cd_status": "✅"
        }
    return None

def generate_repo_section(repos_data):
    md = ""
    for repo in repos_data:
        md += f"""
## 📂 [{repo['name']}]({repo['url']})
![Stars](https://img.shields.io/github/stars/{GH_USERNAME}/{repo['name']}?style=social)
![Forks](https://img.shields.io/github/forks/{GH_USERNAME}/{repo['name']}?style=social)
![Issues](https://img.shields.io/github/issues/{GH_USERNAME}/{repo['name']})
![Last Commit](https://img.shields.io/github/last-commit/{GH_USERNAME}/{repo['name']})

🗓 **Last Updated:** `{repo['last_updated']}`  
🔄 **Latest Commit:** [View Commit]({repo['latest_commit']})  
👤 **Author:** `{repo['author']}`  
🏷 **Open Issues:** `{repo['issues']}`  
⭐ **Stars:** `{repo['stars']}` | 🍴 **Forks:** `{repo['forks']}` | {repo['ci_cd_status']} **CI/CD Status**  

---
"""
    return md.strip()

def inject_into_readme(badge: str, new_content: str):
    with open("README.md", "r", encoding="utf-8") as file:
        readme = file.read()

    # Insert or update badge at the top
    if "![Last Updated]" in readme:
        readme = readme.split("\n", 1)
        readme[0] = badge
        readme = "\n".join(readme)
    else:
        readme = badge + "\n\n" + readme

    start_marker = "<!-- START_REPO_STATUS -->"
    end_marker = "<!-- END_REPO_STATUS -->"

    if start_marker in readme and end_marker in readme:
        before = readme.split(start_marker)[0] + start_marker + "\n"
        after = "\n" + end_marker + readme.split(end_marker)[1]
        updated = before + new_content + after
    else:
        updated = readme + f"\n\n{start_marker}\n{new_content}\n{end_marker}\n"

    with open("README.md", "w", encoding="utf-8") as file:
        file.write(updated)

    print("✅ README.md updated with latest repo statuses!")

if __name__ == "__main__":
    repositories = load_repos()
    statuses = []
    for repo in repositories:
        status = fetch_repo_status(repo)
        if status:
            statuses.append(status)

    markdown = generate_repo_section(statuses)

    timestamp = datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC")
    badge = BADGE_TEMPLATE.format(timestamp.replace(" ", "%20"))

    inject_into_readme(badge, markdown)
