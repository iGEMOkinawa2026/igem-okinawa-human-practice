// src/lib/settings.ts
import settingsRaw from '../data/settings.yaml?raw';
import YAML from 'yaml';

export function getSettings() {
  try {
    return YAML.parse(settingsRaw);
  } catch (e) {
    console.error('Failed to parse settings.yaml', e);
    return { current_year: new Date().getFullYear() };
  }
}