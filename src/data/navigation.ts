import { withBase } from '../lib/paths';

export type SiteLocale = 'en' | 'ja';

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

/** Human Practice sub-section slugs in display order */
export const hpSections = [
  'overview',
  'background',
  'approach',
  'activities',
  'impact',
  'future',
] as const;

export type HpSectionSlug = (typeof hpSections)[number];

/** Labels for HP sub-sections (i18n) */
export const hpSectionLabels: Record<HpSectionSlug, Record<SiteLocale, string>> = {
  overview:   { en: 'Overview',   ja: '概要' },
  background: { en: 'Background', ja: '背景' },
  approach:   { en: 'Approach',   ja: 'アプローチ' },
  activities: { en: 'Activities', ja: '活動' },
  impact:     { en: 'Impact',     ja: 'インパクト' },
  future:     { en: 'Future',     ja: '今後の展望' },
};

/** Build the main navigation for a given locale */
export function getMainNav(locale: SiteLocale): NavItem[] {
  const prefix = locale === 'ja' ? 'ja/' : '';

  return locale === 'en'
    ? [
        { label: 'Home', href: withBase(`${prefix}`) },
        { label: 'About', href: withBase(`${prefix}about/`) },
        { label: 'Project', href: withBase(`${prefix}project/`) },
        { label: 'Highlight', href: withBase(`${prefix}activities/`) },
        { label: 'News', href: withBase(`${prefix}news/`) },
        { label: 'Team', href: withBase(`${prefix}team/`) },
        { label: 'Support', href: withBase(`${prefix}support/`) },
        { label: 'Contact', href: withBase(`${prefix}contact/`) },
        { label: 'Archive', href: withBase(`${prefix}archive/`) },
      ]
    : [
        { label: 'ホーム', href: withBase(`${prefix}`) },
        { label: '概要', href: withBase(`${prefix}about/`) },
        { label: 'プロジェクト', href: withBase(`${prefix}project/`) },
        { label: 'Highlight', href: withBase(`${prefix}activities/`) },
        { label: 'News', href: withBase(`${prefix}news/`) },
        { label: 'チーム', href: withBase(`${prefix}team/`) },
        { label: '支援', href: withBase(`${prefix}support/`) },
        { label: 'お問い合わせ', href: withBase(`${prefix}contact/`) },
        { label: 'アーカイブ', href: withBase(`${prefix}archive/`) },
      ];
}

/** Build the HP section navigation for a given locale */
export function getHpNav(locale: SiteLocale): NavItem[] {
  const prefix = locale === 'ja' ? 'ja/' : '';
  return hpSections.map((slug) => ({
    label: hpSectionLabels[slug][locale],
    href: withBase(`${prefix}activities/human-practice/${slug}/`),
  }));
}
