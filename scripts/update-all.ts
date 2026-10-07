#!/usr/bin/env tsx
/**
 * Unified Update Script
 * 
 * Runs the complete data pipeline:
 * 1. Fetch GitHub data → data/github-repos.json
 * 2. Generate README.md
 * 3. Generate projects-data.ts
 */

import { spawnSync } from 'child_process'

function runScript(scriptName: string): boolean {
  console.log(`\n🔄 Running ${scriptName}...`)
  const result = spawnSync('npx', ['tsx', `scripts/${scriptName}.ts`], {
    stdio: 'inherit',
    cwd: process.cwd(),
  })
  if (result.status !== 0) {
    console.error(`❌ ${scriptName} failed with exit code ${result.status}`)
    return false
  }
  console.log(`✅ ${scriptName} completed`)
  return true
}

function main() {
  console.log('🚀 Starting GitHub Repository Status Update Pipeline')
  console.log('='.repeat(50))

  const startTime = Date.now()

  // Step 1: Fetch GitHub data
  if (!runScript('fetch-github-data')) {
    process.exit(1)
  }

  // Step 2: Generate README
  if (!runScript('generate-readme')) {
    process.exit(1)
  }

  // Step 3: Generate projects-data.ts
  if (!runScript('generate-projects-data')) {
    process.exit(1)
  }

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1)
  console.log('\n' + '='.repeat(50))
  console.log(`🎉 Pipeline completed successfully in ${elapsed}s`)
  console.log('📝 Next steps:')
  console.log('   1. Review changes: git diff')
  console.log('   2. Commit and push: git add -A && git commit -m "Update repo status" && git push')
}

main()