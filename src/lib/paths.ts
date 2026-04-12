/**
 * Resolve a site path for GitHub Pages `base` (leading slash stripped from path).
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  if (path.startsWith('#') || path.startsWith('mailto:')) return path;
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${normalized}`;
}
