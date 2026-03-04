#!/usr/bin/env node
/**
 * Parse-only validation for all YAML files.
 * Uses the same parser as havenforge-site (js-yaml). Fails CI on any parse error
 * (e.g. tab indentation, bad syntax) so the site never silently skips a file.
 */
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const ROOT = path.resolve(__dirname, '..');
const SKIP_DIRS = new Set(['.git', 'node_modules', '_meta']);

function findYamlFiles(dir, results = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    const rel = path.relative(ROOT, full);
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name) || entry.name.startsWith('.')) continue;
      findYamlFiles(full, results);
    } else if (entry.isFile() && (entry.name.endsWith('.yaml') || entry.name.endsWith('.yml'))) {
      results.push(rel);
    }
  }
  return results;
}

const files = findYamlFiles(ROOT);
let failed = 0;

for (const file of files) {
  const fullPath = path.join(ROOT, file);
  try {
    const content = fs.readFileSync(fullPath, 'utf-8');
    yaml.load(content);
  } catch (err) {
    failed++;
    console.error(`${file}: ${err.message}`);
  }
}

if (failed > 0) {
  console.error(`\n${failed} file(s) failed to parse. Fix YAML syntax (e.g. use spaces, not tabs, for indentation).`);
  process.exit(1);
}

console.log(`Validated ${files.length} YAML file(s).`);
