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
        { label: 'About', href: withBase(`${prefix}about/`) },
        {
          label: 'Human Practice',
          href: withBase(`${prefix}human-practice/`),
          children: hpSections.map((slug) => ({
            label: hpSectionLabels[slug].en,
            href: withBase(`${prefix}human-practice/${slug}/`),
          })),
        },
        { label: 'Activities', href: withBase(`${prefix}activities/`) },
        { label: 'Support Us', href: withBase(`${prefix}support/`) },
        { label: 'Archive', href: withBase(`${prefix}archive/`) },
      ]
    : [
        { label: '概要', href: withBase(`${prefix}about/`) },
        {
          label: 'ヒューマンプラクティス',
          href: withBase(`${prefix}human-practice/`),
          children: hpSections.map((slug) => ({
            label: hpSectionLabels[slug].ja,
            href: withBase(`${prefix}human-practice/${slug}/`),
          })),
        },
        { label: '活動', href: withBase(`${prefix}activities/`) },
        { label: '支援', href: withBase(`${prefix}support/`) },
        { label: 'アーカイブ', href: withBase(`${prefix}archive/`) },
      ];
}

/** Build the HP section navigation for a given locale */
export function getHpNav(locale: SiteLocale): NavItem[] {
  const prefix = locale === 'ja' ? 'ja/' : '';
  return hpSections.map((slug) => ({
    label: hpSectionLabels[slug][locale],
    href: withBase(`${prefix}human-practice/${slug}/`),
  }));
}
