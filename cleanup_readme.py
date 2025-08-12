#!/usr/bin/env python3
"""
README Cleanup Script

This script cleans up the README.md file by removing duplicate repository sections
and ensuring the markers are properly placed.
"""

import re
import logging
import argparse
import sys
from pathlib import Path
from typing import List, Dict, Set, Tuple

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
    handlers=[
        logging.StreamHandler(),
    ]
)
logger = logging.getLogger("readme_cleanup")

def parse_args() -> argparse.Namespace:
    """Parse command line arguments"""
    parser = argparse.ArgumentParser(description="Clean up README.md by removing duplicate repository sections")
    parser.add_argument(
        "-f", "--file",
        help="Path to README.md file",
        default="README.md"
    )
    parser.add_argument(
        "-b", "--backup",
        help="Create a backup of the original file",
        action="store_true"
    )
    parser.add_argument(
        "-v", "--verbose",
        help="Enable verbose logging",
        action="store_true"
    )
    return parser.parse_args()

def extract_repo_sections(content: str) -> Tuple[List[Dict[str, str]], List[str]]:
    """
    Extract repository sections from README content

    Returns:
        Tuple containing:
        - List of dictionaries with repo info
        - List of raw section strings
    """
    # Regular expression to match repository sections
    section_pattern = r'## 📂 \[(.*?)\]\((.*?)\)[\s\S]*?(?=## 📂|\Z)'
    sections = re.findall(section_pattern, content)

    repo_info = []
    raw_sections = []

    for match in re.finditer(section_pattern, content):
        section_text = match.group(0)
        raw_sections.append(section_text)

        # Extract repository name and URL
        name_match = re.search(r'## 📂 \[(.*?)\]', section_text)
        url_match = re.search(r'\]\((.*?)\)', section_text)

        if name_match and url_match:
            repo_name = name_match.group(1)
            repo_url = url_match.group(1)

            repo_info.append({
                "name": repo_name,
                "url": repo_url,
                "text": section_text
            })

    return repo_info, raw_sections

def deduplicate_sections(sections: List[Dict[str, str]]) -> List[Dict[str, str]]:
    """Remove duplicate repository sections while preserving order"""
    unique_sections = []
    seen_repos = set()

    for section in sections:
        repo_name = section["name"]
        if repo_name not in seen_repos:
            unique_sections.append(section)
            seen_repos.add(repo_name)

    return unique_sections

def rebuild_readme(original_content: str, unique_sections: List[Dict[str, str]]) -> str:
    """Rebuild README content with unique repository sections"""
    # Find start and end markers
    start_marker = "<!-- START_REPO_STATUS -->"
    end_marker = "<!-- END_REPO_STATUS -->"

    # Check if markers exist
    if start_marker in original_content and end_marker in original_content:
        # Split content around markers
        before = original_content.split(start_marker)[0]
        after = original_content.split(end_marker)[1]

        # Combine sections
        sections_text = "\n".join(section["text"].rstrip() for section in unique_sections)

        # Rebuild content
        return f"{before}{start_marker}\n{sections_text}\n{end_marker}{after}"
    else:
        # Markers don't exist, add them
        # Extract badge and intro (if present)
        badge_pattern = r'(!\[Last Updated\].*?)(?=\n\n)'
        badge_match = re.search(badge_pattern, original_content)

        badge = ""
        if badge_match:
            badge = badge_match.group(1) + "\n\n"
            remainder = original_content[len(badge_match.group(0)):].strip()
        else:
            remainder = original_content

        # Find title section if it exists
        title_pattern = r'(# .*?Repository.*?)(?=\n\n)'
        title_match = re.search(title_pattern, remainder)

        title = ""
        if title_match:
            title_text = title_match.group(1)
            title = title_text + "\n\nThis page automatically updates with the latest commit details.\n\n---\n\n"
            remainder = remainder.replace(title_text, "", 1).strip()
        else:
            title = "# GitHub Repository Status Tracker\n\nThis page automatically updates with the latest commit details.\n\n---\n\n"

        # Combine sections
        sections_text = "\n".join(section["text"].rstrip() for section in unique_sections)

        # Rebuild content
        return f"{badge}{title}{start_marker}\n{sections_text}\n{end_marker}\n"

def main() -> int:
    """Main function"""
    args = parse_args()

    if args.verbose:
        logger.setLevel(logging.DEBUG)

    readme_path = Path(args.file)
    if not readme_path.exists():
        logger.error(f"README file not found: {readme_path}")
        return 1

    # Read README content
    logger.info(f"Reading README file: {readme_path}")
    with open(readme_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Create backup if requested
    if args.backup:
        backup_path = readme_path.with_suffix(f".{readme_path.suffix}.bak")
        logger.info(f"Creating backup: {backup_path}")
        with open(backup_path, "w", encoding="utf-8") as f:
            f.write(content)

    # Extract repository sections
    logger.info("Extracting repository sections")
    repo_sections, raw_sections = extract_repo_sections(content)

    logger.info(f"Found {len(repo_sections)} repository sections")
    logger.debug(f"Repository names: {[section['name'] for section in repo_sections]}")

    # Deduplicate sections
    unique_sections = deduplicate_sections(repo_sections)

    logger.info(f"After deduplication: {len(unique_sections)} unique repositories")
    logger.debug(f"Unique repository names: {[section['name'] for section in unique_sections]}")

    # Rebuild README
    logger.info("Rebuilding README content")
    new_content = rebuild_readme(content, unique_sections)

    # Write updated README
    logger.info(f"Writing updated README to {readme_path}")
    with open(readme_path, "w", encoding="utf-8") as f:
        f.write(new_content)

    num_removed = len(repo_sections) - len(unique_sections)
    logger.info(f"Cleanup complete. Removed {num_removed} duplicate sections.")

    return 0

if __name__ == "__main__":
    sys.exit(main())
