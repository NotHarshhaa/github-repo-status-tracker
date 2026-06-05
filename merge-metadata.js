const fs = require('fs');
const path = require('path');

function loadMetadata() {
  const raw = JSON.parse(fs.readFileSync('repo-metadata.json', 'utf8'));

  if (Array.isArray(raw)) {
    return raw;
  }

  if (raw.repositories && Array.isArray(raw.repositories)) {
    return raw.repositories.map((repo) => ({
      repo: repo.name || repo.repo,
      stars: repo.stars,
      forks: repo.forks,
      issues: repo.issues,
      lastUpdated: repo.raw_updated_at || repo.lastUpdated,
      lastCommit: repo.commit_sha || repo.lastCommit,
    }));
  }

  throw new Error('repo-metadata.json must be an array or contain a "repositories" key');
}

function parseProjects(fileContent) {
  const match = fileContent.match(/export const PROJECTS: Project\[] = (\[[\s\S]*?\]);/);
  if (!match) {
    throw new Error('Could not find `export const PROJECTS: Project[] = [...]` in projects-data.ts');
  }
  return JSON.parse(match[1]);
}

const metadata = loadMetadata();
const projectsDataPath = path.join(__dirname, 'src/data/projects-data.ts');
let fileContent = fs.readFileSync(projectsDataPath, 'utf-8');

let projects;
try {
  projects = parseProjects(fileContent);
} catch (err) {
  console.error(`❌ ${err.message}`);
  process.exit(1);
}

const metadataMap = Object.fromEntries(metadata.map((m) => [m.repo, m]));

let merged = 0;
projects.forEach((project) => {
  const repoName = project.link?.href?.split('/').pop();
  const meta = metadataMap[repoName];
  if (meta) {
    project.stars = meta.stars;
    project.forks = meta.forks;
    project.issues = meta.issues;
    project.lastUpdated = meta.lastUpdated;
    project.lastCommit = meta.lastCommit;
    merged += 1;
  }
});

const updatedContent = `export const PROJECTS: Project[] = ${JSON.stringify(projects, null, 2)};\n`;
fileContent = fileContent.replace(
  /export const PROJECTS: Project\[] = \[[\s\S]*?\];/,
  updatedContent.trimEnd()
);

fs.writeFileSync(projectsDataPath, fileContent, 'utf-8');
console.log(`✅ Merged metadata for ${merged}/${projects.length} projects into projects-data.ts`);
