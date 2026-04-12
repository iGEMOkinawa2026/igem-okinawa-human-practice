/** Truncate plain text for card previews (~120 chars + ellipsis). */
export function truncateSummary(text: string, max = 120): string {
  const t = text.trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 3).trimEnd();
  return `${cut}...`;
}
