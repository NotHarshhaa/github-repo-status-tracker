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

from datetime import datetime, timezone
import requests
import os
import json
import logging
import time
import argparse
import sys
import re
import unicodedata
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

            commit_sha = None
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

            # Latest workflow run across all workflows (single API call)
            runs_url = f"https://api.github.com/repos/{GH_USERNAME}/{repo}/actions/runs?per_page=1"
            runs_response = requests.get(
                runs_url,
                auth=(GH_USERNAME, GH_TOKEN),
                timeout=API_TIMEOUT
            )

            ci_cd_status = "⚪"
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
                "commit_sha": commit_sha,
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

def normalize_description(text: Optional[str], max_len: int = 140) -> str:
    """Flatten styled Unicode and trim descriptions for readable README text."""
    if not text or not text.strip():
        return "No description provided."

    cleaned = unicodedata.normalize("NFKC", text)
    cleaned = re.sub(r"[\U0001D400-\U0001D7FF\U0001D600-\U0001D64F]", "", cleaned)
    cleaned = re.sub(r"\s+", " ", cleaned).strip()

    if len(cleaned) > max_len:
        cleaned = cleaned[: max_len - 3].rstrip() + "..."

    return cleaned or "No description provided."

def format_number(value: Union[int, float]) -> str:
    """Format integers with thousands separators for tables."""
    return f"{int(value):,}"

def format_ci_label(status: str) -> str:
    """Map CI status emoji to a compact table label."""
    return {
        "✅": "Pass",
        "❌": "Fail",
        "🔄": "Running",
        "⚪": "—",
    }.get(status, "—")

def truncate_text(text: str, max_len: int) -> str:
    if len(text) <= max_len:
        return text
    return text[: max_len - 3].rstrip() + "..."

def generate_summary_table(repos_data: List[Dict[str, Any]]) -> str:
    """Generate a compact overview table for all repositories."""
    rows = []
    for index, repo in enumerate(repos_data, start=1):
        rows.append(
            "| {index} | [{name}]({url}) | {stars} | {forks} | {issues} | {ci} | {updated} |".format(
                index=index,
                name=repo["name"],
                url=repo["url"],
                stars=format_number(repo.get("stars", 0)),
                forks=format_number(repo.get("forks", 0)),
                issues=format_number(repo.get("issues", 0)),
                ci=format_ci_label(repo.get("ci_cd_status", "⚪")),
                updated=repo.get("last_updated", "—"),
            )
        )

    return "\n".join([
        "| # | Repository | Stars | Forks | Issues | CI | Updated |",
        "|:--:|------------|------:|------:|-------:|:--:|---------|",
        *rows,
    ])

def generate_repo_details(repo: Dict[str, Any]) -> str:
    """Generate a collapsible detail block for one repository."""
    name = repo["name"]
    description = normalize_description(repo.get("description"))
    commit_message = truncate_text(repo.get("commit_message", "No commits found"), 90)
    languages = repo.get("languages", [])
    topics = repo.get("topics", [])
    license_name = repo.get("license", "No license")
    lang_line = " · ".join(f"`{lang}`" for lang in languages[:5]) if languages else "_None detected_"
    topic_line = " · ".join(f"`{topic}`" for topic in topics[:6]) if topics else "_None_"

    return f"""<!-- repo:{name} -->
<details>
<summary>
  <strong><a href="{repo['url']}">{name}</a></strong>
  &nbsp;·&nbsp; ⭐ {format_number(repo.get('stars', 0))}
  &nbsp;·&nbsp; 🍴 {format_number(repo.get('forks', 0))}
  &nbsp;·&nbsp; CI {format_ci_label(repo.get('ci_cd_status', '⚪'))}
  <br><sub>{description}</sub>
</summary>
<br>

![Stars](https://img.shields.io/github/stars/{GH_USERNAME}/{name}?style=flat-square)
![Forks](https://img.shields.io/github/forks/{GH_USERNAME}/{name}?style=flat-square)
![Issues](https://img.shields.io/github/issues/{GH_USERNAME}/{name}?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/{GH_USERNAME}/{name}?style=flat-square)

| | |
|---|---|
| **Latest commit** | [{commit_message}]({repo['latest_commit']}) |
| **Commit date** | `{repo.get('commit_date', 'Unknown')}` |
| **Author** | `{repo.get('author', 'Unknown')}` |
| **Repo updated** | `{repo.get('last_updated', 'Unknown')}` |
| **License** | `{license_name}` |
| **Languages** | {lang_line} |
| **Topics** | {topic_line} |

</details>"""

def generate_repo_section(repos_data: List[Dict[str, Any]]) -> str:
    """Generate the full auto-updated README body."""
    if not repos_data:
        return "No repository data available."

    total_stars = sum(repo.get("stars", 0) for repo in repos_data)
    total_forks = sum(repo.get("forks", 0) for repo in repos_data)
    total_issues = sum(repo.get("issues", 0) for repo in repos_data)

    overview = (
        f"> **{len(repos_data)}** repositories · "
        f"**{format_number(total_stars)}** stars · "
        f"**{format_number(total_forks)}** forks · "
        f"**{format_number(total_issues)}** open issues"
    )
    table = generate_summary_table(repos_data)
    details = "\n\n".join(generate_repo_details(repo) for repo in repos_data)

    return "\n\n".join([
        overview,
        "### Quick overview",
        table,
        "### Repository details",
        "<sub>Click a repository to expand commit info, languages, and topics.</sub>",
        details,
    ])

def build_readme_header(badge: str, repo_count: int, total_stars: int) -> str:
    """Build the static README intro shown above the generated section."""
    return f"""{badge}

# GitHub Repository Status Tracker

Live status dashboard for [@{GH_USERNAME}](https://github.com/{GH_USERNAME}) repositories.
Updates automatically every 6 hours via GitHub Actions.

**{repo_count}** repositories tracked · **{format_number(total_stars)}** combined stars

---"""

def inject_into_readme(
    badge: str,
    new_content: str,
    readme_path: str,
    repo_count: int = 0,
    total_stars: int = 0,
) -> bool:
    """
    Update README.md with repository status information.

    Args:
        badge: Updated badge with timestamp
        new_content: Repository status content in markdown
        readme_path: Path to the README file
        repo_count: Number of repositories in the generated section
        total_stars: Combined star count for the header summary

    Returns:
        True if successful, False otherwise
    """
    try:
        readme_file = Path(readme_path)
        start_marker = "<!-- START_REPO_STATUS -->"
        end_marker = "<!-- END_REPO_STATUS -->"
        header = build_readme_header(badge, repo_count, total_stars)

        if not readme_file.exists():
            logger.warning(f"README file not found: {readme_path}")
            logger.info("Creating new README file")
            updated = f"{header}\n\n{start_marker}\n{new_content}\n{end_marker}\n"
            with open(readme_file, "w", encoding="utf-8") as file:
                file.write(updated)
            logger.info(f"✅ {readme_path} created with latest repo statuses!")
            return True

        with open(readme_file, "r", encoding="utf-8") as file:
            readme = file.read()

        if start_marker in readme and end_marker in readme:
            after_marker = readme.split(end_marker, 1)[1]
            updated = f"{header}\n\n{start_marker}\n{new_content}\n{end_marker}{after_marker}"
        else:
            updated = f"{header}\n\n{start_marker}\n{new_content}\n{end_marker}\n"

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
    """Export repository metadata for the Next.js dashboard merge step."""
    try:
        metadata = [
            {
                "repo": repo["name"],
                "stars": repo["stars"],
                "forks": repo["forks"],
                "issues": repo["issues"],
                "lastUpdated": repo["raw_updated_at"],
                "lastCommit": repo.get("commit_sha"),
            }
            for repo in repos_data
        ]
        with open("repo-metadata.json", "w", encoding="utf-8") as f:
            json.dump(metadata, f, indent=2)
        logger.info("Repository metadata exported to repo-metadata.json")
    except Exception as e:
        logger.error(f"Error exporting JSON data: {e}")

def format_badge_timestamp() -> str:
    """Format timestamp for shields.io Last Updated badge."""
    timestamp = datetime.now(timezone.utc).strftime("%Y--%m--%d %H:%M UTC")
    return timestamp.replace(" ", "%20").replace(":", "%3A")

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

            badge = BADGE_TEMPLATE.format(format_badge_timestamp())
            total_stars = sum(repo.get("stars", 0) for repo in sorted_statuses)

            # Update README
            if inject_into_readme(
                badge,
                markdown,
                args.readme,
                repo_count=len(sorted_statuses),
                total_stars=total_stars,
            ):
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
