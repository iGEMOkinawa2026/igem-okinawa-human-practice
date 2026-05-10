import fs from 'node:fs';
import yaml from 'yaml';
import path from 'node:path';

export function getSettings() {
  try {
    const filePath = path.resolve('./src/data/settings.yaml');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return yaml.parse(fileContents);
  } catch (e) {
    console.error("Failed to load settings.yaml", e);
    return { current_year: new Date().getFullYear() };
  }
}
