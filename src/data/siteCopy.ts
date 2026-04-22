/**
 * Site-wide copy & i18n strings.
 * Page-specific content lives in Markdown/YAML content collections.
 * This file provides:
 *  - shared header/footer strings
 *  - landing-page hero copy
 *  - card-nav labels for the landing page
 */

export type SiteLocale = 'en' | 'ja';

export const siteCopy = {
  en: {
    page: {
      title: 'iGEM Okinawa | 2026 Team',
      description:
        'iGEM Okinawa is a student-led synthetic biology research team representing Okinawa to the world. Currently highlighting the 2026 Team.',
    },
    header: {
      siteTitle: 'iGEM Okinawa',
      menuToggleLabel: 'Toggle navigation',
    },
    hero: {
      badgeNatural: false,
      badgeText: 'Introducing',
      headingPrefix: 'The ',
      headingStrong: '2026',
      headingSuffix: ' Team',
      headingSuffixSmall: false,
      lede: 'We are iGEM Okinawa. Fusing the incredible biodiversity of the Ryukyu Islands with cutting-edge synthetic biology to solve global challenges.',
      primaryCtaLabel: 'Our Human Practice',
      primaryCtaHref: 'human-practice/',
      secondaryCtaLabel: 'About the Team',
      secondaryCtaHref: 'about/',
      imagePlaceholderText: '[ 2026 Team Image Placeholder ]',
    },
    /** Cards shown on the landing page pointing to main sections */
    navCards: [
      {
        icon: '👥',
        title: 'About Us',
        body: 'Learn about our team, mission, and the unique perspective we bring from Okinawa.',
        href: 'about/',
      },
      {
        icon: '🤝',
        title: 'Human Practice',
        body: 'Explore how we connect our science to society through stakeholder engagement and ethics.',
        href: 'human-practice/',
      },
      {
        icon: '🔬',
        title: 'Activities',
        body: 'See what our team is working on — from wet lab experiments to computational modeling.',
        href: 'activities/',
      },
      {
        icon: '💡',
        title: 'Support Us',
        body: 'Your sponsorship helps fund lab equipment, project development, and competition entry.',
        href: 'support/',
      },
      {
        icon: '📚',
        title: 'Archive',
        body: "Browse past iGEM Okinawa teams, projects, and competition history.",
        href: 'archive/',
      },
    ],
    footer: {
      brandTitle: 'iGEM Okinawa',
      brandTagline: 'Innovating with synthetic biology from the Ryukyu Islands to the world.',
      exploreHeading: 'Explore',
      connectHeading: 'Connect',
      copyrightLine: '© 2026 iGEM Okinawa. All rights reserved.',
      privacyHref: '#',
      privacyLabel: 'Privacy Policy',
      termsHref: '#',
      termsLabel: 'Terms of Use',
    },
  },
  ja: {
    page: {
      title: 'iGEM Okinawa | 2026team',
      description:
        'iGEM Okinawaは、沖縄から世界へ合成生物学の挑戦を発信する学生主導の研究チームです。現在は2026年チームを紹介しています。',
    },
    header: {
      siteTitle: 'iGEM Okinawa',
      menuToggleLabel: 'メニューを開閉',
    },
    hero: {
      badgeNatural: true,
      badgeText: 'ご紹介',
      headingPrefix: '',
      headingStrong: '2026',
      headingSuffix: '年チーム',
      headingSuffixSmall: true,
      lede: '私たちはiGEM Okinawaです。琉球列島の豊かな生物多様性と最先端の合成生物学を融合し、地球規模の課題解決に挑みます。',
      primaryCtaLabel: 'ヒューマンプラクティス',
      primaryCtaHref: 'human-practice/',
      secondaryCtaLabel: 'チーム紹介',
      secondaryCtaHref: 'about/',
      imagePlaceholderText: '[ 2026年チーム画像プレースホルダー ]',
    },
    navCards: [
      {
        icon: '👥',
        title: 'チーム紹介',
        body: '私たちのチーム、ミッション、沖縄ならではの視点をご紹介します。',
        href: 'about/',
      },
      {
        icon: '🤝',
        title: 'ヒューマンプラクティス',
        body: 'ステークホルダーとの関わりや倫理を通じて、科学と社会をつなげる取り組み。',
        href: 'human-practice/',
      },
      {
        icon: '🔬',
        title: '活動',
        body: 'ウェットラボ実験からコンピュータモデリングまで、チームの取り組みをご覧ください。',
        href: 'activities/',
      },
      {
        icon: '💡',
        title: '支援する',
        body: 'ご支援は、実験設備、プロジェクト開発、国際大会への参加に直結します。',
        href: 'support/',
      },
      {
        icon: '📚',
        title: 'アーカイブ',
        body: '過去のiGEM Okinawaチーム、プロジェクト、大会の歩みをご覧ください。',
        href: 'archive/',
      },
    ],
    footer: {
      brandTitle: 'iGEM Okinawa',
      brandTagline: '琉球から世界へ。\n合成生物学で未来を描く。',
      exploreHeading: 'サイトマップ',
      connectHeading: 'つながる',
      copyrightLine: '© 2026 iGEM Okinawa',
      privacyHref: '#',
      privacyLabel: 'プライバシーポリシー',
      termsHref: '#',
      termsLabel: '利用規約',
    },
  },
} as const;
