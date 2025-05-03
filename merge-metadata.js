const fs = require('fs');
const path = require('path');

// Load metadata
const metadata = require('./repo-metadata.json');

// Load projects-data.ts
const projectsDataPath = path.join(__dirname, 'src/data/projects-data.ts');
let fileContent = fs.readFileSync(projectsDataPath, 'utf-8');

// Extract the PROJECTS array (ignoring type declaration)
const match = fileContent.match(/export const PROJECTS: Project\[] = (\[.*\]);\s*$/s);
if (!match) {
  console.error('❌ Could not find `export const PROJECTS: Project[] = [...]` in projects-data.ts');
  process.exit(1);
}

let projectsArrayStr = match[1];
let projects = eval(projectsArrayStr); // convert string to array

// Map metadata by repo name for easy access
const metadataMap = {};
metadata.forEach(m => {
  metadataMap[m.repo] = m;
});

// Merge metadata into projects
projects.forEach(project => {
  const repoUrl = project.link?.href;
  const repoName = repoUrl?.split('/').pop();
  const meta = metadataMap[repoName];
  if (meta) {
    project.stars = meta.stars;
    project.forks = meta.forks;
    project.issues = meta.issues;
    project.lastUpdated = meta.lastUpdated;
    project.lastCommit = meta.lastCommit;
  }
});

// Generate updated TypeScript content
const updatedContent = `export const PROJECTS: Project[] = ${JSON.stringify(projects, null, 2)};\n`;

// Replace the original array in the file content
fileContent = fileContent.replace(/export const PROJECTS: Project\[] = \[.*\];\s*$/s, updatedContent);

// Write the merged result back
fs.writeFileSync(projectsDataPath, fileContent, 'utf-8');
console.log('✅ Successfully merged metadata into projects-data.ts');
