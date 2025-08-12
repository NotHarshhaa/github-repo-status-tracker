#!/usr/bin/env python3
"""
GitHub Repository Status Tracker

This script fetches status information for GitHub repositories and updates
a README.md file with the latest information.

Features:
- Fetches repository metadata from GitHub API
- Generates badges and status sections for each repository
- Updates README.md with the latest information
- Handles rate limiting and errors gracefully
- Provides configurable options through environment variables
"""

from datetime import datetime
import requests
import os
import json
import logging
import time
import argparse
import sys
from typing import Dict, List, Optional, Any, Union
from pathlib import Path

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
    handlers=[
        logging.StreamHandler(),
        logging.FileHandler("repo_status.log", encoding="utf-8"),
    ]
)
logger = logging.getLogger("repo_status")

# Configuration
GH_USERNAME = os.getenv("GH_USERNAME", "NotHarshhaa")
GH_TOKEN = os.getenv("GH_TOKEN")
CONFIG_FILE = os.getenv("CONFIG_FILE", "repos.json")
README_FILE = os.getenv("README_FILE", "README.md")
API_URL = "https://api.github.com/repos/{}/{}"
BADGE_TEMPLATE = "![Last Updated](https://img.shields.io/badge/Last%20Updated-{}-blue?style=flat-square)"

# Constants
MAX_RETRIES = 3
RETRY_DELAY = 2  # seconds
API_TIMEOUT = 10  # seconds
RATE_LIMIT_WAIT = 60  # seconds

class ApiRateLimitExceeded(Exception):
    """Exception raised when GitHub API rate limit is exceeded"""
    pass

def parse_arguments() -> argparse.Namespace:
    """Parse command line arguments"""
    parser = argparse.ArgumentParser(description="Update GitHub repository status in README.md")
    parser.add_argument(
        "-c", "--config",
        help=f"Path to configuration file (default: {CONFIG_FILE})",
        default=CONFIG_FILE
    )
    parser.add_argument(
        "-r", "--readme",
        help=f"Path to README file (default: {README_FILE})",
        default=README_FILE
    )
    parser.add_argument(
        "-v", "--verbose",
        help="Enable verbose logging",
        action="store_true"
    )
    parser.add_argument(
        "-f", "--force",
        help="Force update even if rate limited",
        action="store_true"
    )
    parser.add_argument(
        "-s", "--sort",
        help="Sort repositories by field (stars, forks, issues, updated)",
        choices=["stars", "forks", "issues", "updated"],
        default=None
    )
    return parser.parse_args()

def load_repos(config_file: str) -> List[str]:
    """
    Load repository names from the configuration file.

    Args:
        config_file: Path to the configuration file

    Returns:
        List of repository names

    Raises:
        FileNotFoundError: If the config file doesn't exist
        json.JSONDecodeError: If the config file isn't valid JSON
    """
    try:
        config_path = Path(config_file)
        if not config_path.exists():
            logger.error(f"Configuration file not found: {config_file}")
            raise FileNotFoundError(f"Configuration file not found: {config_file}")

        with open(config_path, "r", encoding="utf-8") as file:
            data = json.load(file)

        if "repositories" not in data:
            logger.error("Invalid configuration file: 'repositories' key not found")
            raise KeyError("Invalid configuration file: 'repositories' key not found")

        # Remove any duplicate repository names while preserving order
        repos = []
        seen = set()
        for repo in data["repositories"]:
            if repo not in seen:
                repos.append(repo)
                seen.add(repo)

        logger.info(f"Loaded {len(repos)} repositories from config file")
        return repos

    except json.JSONDecodeError:
        logger.error(f"Invalid JSON in configuration file: {config_file}")
        raise
    except Exception as e:
        logger.error(f"Error loading repositories: {e}")
        raise

def check_rate_limit(force: bool = False) -> bool:
    """
    Check GitHub API rate limit status.

    Args:
        force: If True, continue even if rate limited

    Returns:
        True if under rate limit, False otherwise

    Raises:
        ApiRateLimitExceeded: If rate limited and not forcing
    """
    try:
        response = requests.get(
            "https://api.github.com/rate_limit",
            auth=(GH_USERNAME, GH_TOKEN),
            timeout=API_TIMEOUT
        )
        response.raise_for_status()

        data = response.json()
        core = data["resources"]["core"]
        remaining = core["remaining"]
        reset_time = datetime.fromtimestamp(core["reset"])

        logger.info(f"API Rate Limit: {remaining}/{core['limit']} requests remaining, resets at {reset_time}")

        if remaining < 5 and not force:
            wait_time = core["reset"] - int(time.time()) + 5  # Add buffer
            logger.warning(f"Rate limit low: {remaining} requests remaining. Reset in {wait_time} seconds.")
            raise ApiRateLimitExceeded(f"GitHub API rate limit reached. Reset at {reset_time}")

        return remaining > 0

    except requests.RequestException as e:
        logger.warning(f"Could not check rate limit: {e}")
        return True  # Assume it's OK if we can't check

def fetch_repo_status(repo: str, retries: int = MAX_RETRIES) -> Optional[Dict[str, Any]]:
    """
    Fetch repository status from GitHub API.

    Args:
        repo: Repository name
        retries: Number of retry attempts for transient errors

    Returns:
        Dictionary containing repository status information or None if failed
    """
    url = API_URL.format(GH_USERNAME, repo)

    for attempt in range(retries):
        try:
            logger.info(f"Fetching data for {repo} (attempt {attempt+1})")
            response = requests.get(
                url,
                auth=(GH_USERNAME, GH_TOKEN),
                timeout=API_TIMEOUT,
                headers={"Accept": "application/vnd.github.v3+json"}
            )

            if response.status_code == 403 and "rate limit exceeded" in response.text.lower():
                logger.warning("Rate limit exceeded during repository fetch")
                raise ApiRateLimitExceeded("Rate limit exceeded during repository fetch")

            if response.status_code == 404:
                logger.warning(f"Repository not found: {repo}")
                return None

            response.raise_for_status()
            data = response.json()

            # Fetch latest commit data
            commits_url = f"https://api.github.com/repos/{GH_USERNAME}/{repo}/commits?per_page=1"
            commits_response = requests.get(
                commits_url,
                auth=(GH_USERNAME, GH_TOKEN),
                timeout=API_TIMEOUT
            )

            if commits_response.status_code == 200:
                latest_commit_data = commits_response.json()
                if latest_commit_data:
                    commit_sha = latest_commit_data[0]["sha"]
                    commit_url = f"https://github.com/{GH_USERNAME}/{repo}/commit/{commit_sha}"
                    commit_date = latest_commit_data[0]["commit"]["author"]["date"].split("T")[0]
                    commit_author = latest_commit_data[0]["commit"]["author"]["name"]
                    commit_message = latest_commit_data[0]["commit"]["message"].split("\n")[0]
                else:
                    commit_url = f"https://github.com/{GH_USERNAME}/{repo}/commits"
                    commit_date = "N/A"
                    commit_author = "Unknown"
                    commit_message = "No commits found"
            else:
                commit_url = f"https://github.com/{GH_USERNAME}/{repo}/commits"
                commit_date = "N/A"
                commit_author = "Unknown"
                commit_message = "Could not fetch commit info"

            # Check for workflow status if workflows exist
            workflows_url = f"https://api.github.com/repos/{GH_USERNAME}/{repo}/actions/workflows"
            workflows_response = requests.get(
                workflows_url,
                auth=(GH_USERNAME, GH_TOKEN),
                timeout=API_TIMEOUT
            )

            ci_cd_status = "⚪"  # Default: No workflows
            if workflows_response.status_code == 200:
                workflows_data = workflows_response.json()
                if workflows_data.get("total_count", 0) > 0:
                    # Get latest run for the first workflow
                    first_workflow_id = workflows_data["workflows"][0]["id"]
                    runs_url = f"https://api.github.com/repos/{GH_USERNAME}/{repo}/actions/workflows/{first_workflow_id}/runs?per_page=1"
                    runs_response = requests.get(
                        runs_url,
                        auth=(GH_USERNAME, GH_TOKEN),
                        timeout=API_TIMEOUT
                    )

                    if runs_response.status_code == 200:
                        runs_data = runs_response.json()
                        if runs_data.get("total_count", 0) > 0:
                            status = runs_data["workflow_runs"][0]["conclusion"]
                            if status == "success":
                                ci_cd_status = "✅"
                            elif status == "failure":
                                ci_cd_status = "❌"
                            else:
                                ci_cd_status = "🔄"

            # Get repository languages
            languages_url = f"https://api.github.com/repos/{GH_USERNAME}/{repo}/languages"
            languages_response = requests.get(
                languages_url,
                auth=(GH_USERNAME, GH_TOKEN),
                timeout=API_TIMEOUT
            )

            languages = []
            if languages_response.status_code == 200:
                languages_data = languages_response.json()
                languages = list(languages_data.keys())

            # Get license information
            license_info = data.get("license", {})
            license_name = license_info.get("name", "No license") if license_info else "No license"

            # Parse the date properly
            updated_at = datetime.fromisoformat(data["updated_at"].replace("Z", "+00:00"))
            formatted_date = updated_at.strftime("%Y-%m-%d")

            return {
                "name": repo,
                "url": data["html_url"],
                "description": data.get("description", "No description provided"),
                "last_updated": formatted_date,
                "latest_commit": commit_url,
                "commit_date": commit_date,
                "commit_message": commit_message,
                "author": commit_author,
                "issues": data["open_issues_count"],
                "stars": data["stargazers_count"],
                "forks": data["forks_count"],
                "watchers": data["watchers_count"],
                "ci_cd_status": ci_cd_status,
                "languages": languages[:5],  # Limit to top 5 languages
                "license": license_name,
                "topics": data.get("topics", []),
                "raw_updated_at": data["updated_at"]  # Keep raw date for sorting
            }

        except ApiRateLimitExceeded:
            logger.warning(f"Rate limit exceeded, waiting {RATE_LIMIT_WAIT} seconds")
            time.sleep(RATE_LIMIT_WAIT)
            if attempt == retries - 1:
                raise

        except requests.RequestException as e:
            logger.warning(f"Error fetching {repo} (attempt {attempt+1}): {e}")
            if attempt < retries - 1:
                delay = RETRY_DELAY * (attempt + 1)
                logger.info(f"Retrying in {delay} seconds...")
                time.sleep(delay)
            else:
                logger.error(f"Failed to fetch data for {repo} after {retries} attempts")
                return None

        except Exception as e:
            logger.error(f"Unexpected error for {repo}: {e}")
            return None

    return None

def generate_language_badges(languages: List[str]) -> str:
    """Generate markdown badges for repository languages"""
    badges = []
    color_map = {
        "Python": "3776AB",
        "JavaScript": "F7DF1E",
        "TypeScript": "3178C6",
        "HTML": "E34F26",
        "CSS": "1572B6",
        "Java": "007396",
        "Go": "00ADD8",
        "Ruby": "CC342D",
        "PHP": "777BB4",
        "C++": "00599C",
        "C#": "239120",
        "Shell": "4EAA25",
        "Dockerfile": "2496ED",
    }

    for lang in languages:
        color = color_map.get(lang, "gray")
        badge = f"![{lang}](https://img.shields.io/badge/-{lang}-{color}?style=flat-square&logo={lang.lower()}&logoColor=white)"
        badges.append(badge)

    return " ".join(badges)

def generate_repo_section(repos_data: List[Dict[str, Any]]) -> str:
    """
    Generate markdown content for repository status section.

    Args:
        repos_data: List of repository status dictionaries

    Returns:
        Markdown formatted string for README
    """
    if not repos_data:
        return "No repository data available."

    md = ""
    for repo in repos_data:
        # Generate language badges
        lang_badges = generate_language_badges(repo.get("languages", []))

        # Generate topic badges if available
        topic_badges = ""
        topics = repo.get("topics", [])
        if topics:
            topic_badges = " ".join([f"`#{topic}`" for topic in topics[:5]])

        # Format description (truncate if too long)
        description = repo.get("description", "No description provided")
        if len(description) > 100:
            description = description[:97] + "..."

        # Format commit message (truncate if too long)
        commit_message = repo.get("commit_message", "")
        if len(commit_message) > 70:
            commit_message = commit_message[:67] + "..."

        md += f"""
## 📂 [{repo['name']}]({repo['url']})

{description}

![Stars](https://img.shields.io/github/stars/{GH_USERNAME}/{repo['name']}?style=flat-square)
![Forks](https://img.shields.io/github/forks/{GH_USERNAME}/{repo['name']}?style=flat-square)
![Issues](https://img.shields.io/github/issues/{GH_USERNAME}/{repo['name']}?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/{GH_USERNAME}/{repo['name']}?style=flat-square)
{lang_badges}

🗓 **Last Updated:** `{repo['last_updated']}`
🔄 **Latest Commit:** [{commit_message}]({repo['latest_commit']}) on `{repo.get('commit_date', 'Unknown')}`
👤 **Author:** `{repo['author']}`
🏷 **Open Issues:** `{repo['issues']}`
⭐ **Stars:** `{repo['stars']}` | 🍴 **Forks:** `{repo['forks']}` | 👀 **Watchers:** `{repo.get('watchers', 0)}` | {repo['ci_cd_status']} **CI/CD Status**
📄 **License:** `{repo.get('license', 'Unknown')}`

{topic_badges}

---
"""
    return md.strip()

def inject_into_readme(badge: str, new_content: str, readme_path: str) -> bool:
    """
    Update README.md with repository status information.

    Args:
        badge: Updated badge with timestamp
        new_content: Repository status content in markdown
        readme_path: Path to the README file

    Returns:
        True if successful, False otherwise
    """
    try:
        readme_file = Path(readme_path)
        if not readme_file.exists():
            logger.warning(f"README file not found: {readme_path}")
            logger.info("Creating new README file")
            with open(readme_file, "w", encoding="utf-8") as file:
                file.write(f"{badge}\n\n# GitHub Repository Status Tracker\n\n")

        with open(readme_file, "r", encoding="utf-8") as file:
            readme = file.read()

        # Insert or update badge at the top
        if "![Last Updated]" in readme:
            lines = readme.split("\n", 1)
            lines[0] = badge
            readme = "\n".join(lines)
        else:
            readme = badge + "\n\n" + readme

        # Update repository status section
        start_marker = "<!-- START_REPO_STATUS -->"
        end_marker = "<!-- END_REPO_STATUS -->"

        if start_marker in readme and end_marker in readme:
            # Get the content before the start marker
            before_marker = readme.split(start_marker)[0]
            # Get the content after the end marker
            after_marker = readme.split(end_marker)[1] if end_marker in readme.split(start_marker)[1] else ""
            # Create updated content with markers
            updated = before_marker + start_marker + "\n" + new_content + "\n" + end_marker + after_marker
        else:
            # If markers don't exist, add them at the end
            if "# GitHub Repository Status" not in readme:
                readme += "\n\n# GitHub Repository Status\n"
            updated = readme + f"\n\n{start_marker}\n{new_content}\n{end_marker}\n"

        with open(readme_file, "w", encoding="utf-8") as file:
            file.write(updated)

        logger.info(f"✅ {readme_path} updated with latest repo statuses!")
        return True

    except Exception as e:
        logger.error(f"Error updating README: {e}")
        return False

def sort_repos(repos_data: List[Dict[str, Any]], sort_by: Optional[str] = None) -> List[Dict[str, Any]]:
    """
    Sort repositories by the specified field.

    Args:
        repos_data: List of repository status dictionaries
        sort_by: Field to sort by (stars, forks, issues, updated)

    Returns:
        Sorted list of repository status dictionaries
    """
    if not sort_by or not repos_data:
        return repos_data

    # First, remove any duplicates by repo name
    unique_repos = {}
    for repo in repos_data:
        name = repo.get("name")
        if name not in unique_repos or (unique_repos[name].get("raw_updated_at", "") < repo.get("raw_updated_at", "")):
            unique_repos[name] = repo

    deduplicated_data = list(unique_repos.values())

    if sort_by == "stars":
        return sorted(deduplicated_data, key=lambda x: x.get("stars", 0), reverse=True)
    elif sort_by == "forks":
        return sorted(deduplicated_data, key=lambda x: x.get("forks", 0), reverse=True)
    elif sort_by == "issues":
        return sorted(deduplicated_data, key=lambda x: x.get("issues", 0), reverse=True)
    elif sort_by == "updated":
        return sorted(deduplicated_data, key=lambda x: x.get("raw_updated_at", ""), reverse=True)

    return deduplicated_data

def export_json_data(repos_data: List[Dict[str, Any]]) -> None:
    """Export repository data to JSON file for potential use in web interfaces"""
    try:
        with open("repo-metadata.json", "w", encoding="utf-8") as f:
            json.dump({
                "last_updated": datetime.utcnow().isoformat(),
                "repositories": repos_data
            }, f, indent=2)
        logger.info("Repository metadata exported to repo-metadata.json")
    except Exception as e:
        logger.error(f"Error exporting JSON data: {e}")

def main() -> int:
    """Main function to update repository status"""
    args = parse_arguments()

    if args.verbose:
        logger.setLevel(logging.DEBUG)

    logger.info("Starting GitHub Repository Status Update")

    if not GH_TOKEN:
        logger.error("GitHub token not found. Set the GH_TOKEN environment variable.")
        return 1

    try:
        # Check rate limit before starting
        try:
            check_rate_limit(args.force)
        except ApiRateLimitExceeded as e:
            if not args.force:
                logger.error(f"GitHub API rate limit exceeded: {e}")
                return 2
            logger.warning("Forcing execution despite rate limit")

        # Load repositories
        repositories = load_repos(args.config)
        if not repositories:
            logger.warning("No repositories found in configuration")
            return 0

        # Fetch repository status
        statuses = []
        failed = []

        for repo in repositories:
            try:
                logger.info(f"Processing repository: {repo}")
                status = fetch_repo_status(repo)
                if status:
                    statuses.append(status)
                else:
                    failed.append(repo)
            except ApiRateLimitExceeded:
                logger.error("Rate limit exceeded, stopping processing")
                break
            except Exception as e:
                logger.error(f"Error processing {repo}: {e}")
                failed.append(repo)

        # Remove this sorting step - we'll handle it later with deduplication
        # (This will be handled in the section where we generate the markdown)

        # Generate markdown and update README
        if statuses:
            # Export data to JSON for potential web interface use
            export_json_data(statuses)

            # Log the number of repositories before and after deduplication
            logger.info(f"Processing {len(statuses)} repositories (before deduplication)")

            # Sort and deduplicate repositories
            sorted_statuses = sort_repos(statuses, args.sort)
            logger.info(f"Processed {len(sorted_statuses)} repositories (after deduplication)")

            # Generate markdown content
            markdown = generate_repo_section(sorted_statuses)

            # Create badge with timestamp
            timestamp = datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC")
            badge = BADGE_TEMPLATE.format(timestamp.replace(" ", "%20"))

            # Update README
            if inject_into_readme(badge, markdown, args.readme):
                logger.info(f"Updated {len(sorted_statuses)} repositories in README")
            else:
                logger.error("Failed to update README")

        # Report results
        if failed:
            logger.warning(f"Failed to process {len(failed)} repositories: {', '.join(failed)}")

        logger.info("Repository status update completed")
        return 0

    except Exception as e:
        logger.error(f"Unhandled exception: {e}")
        return 3

if __name__ == "__main__":
    sys.exit(main())
