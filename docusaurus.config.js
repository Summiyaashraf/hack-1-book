import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'An Open-Source Textbook for the Future of AI',
  favicon: 'img/favicon.ico',

  // Apna final URL daal dena jab deploy karo
  url: 'https://physical-ai.github.io', // ya jo bhi final hoga
  baseUrl: '/physical-ai-textbook/',    // agar GitHub Pages use karoge to yeh daal dena, warna '/' rakh sakte ho

  // YE DO LINE BADAL DO YA DELETE KAR DO
  organizationName: 'physical-ai',           // ← APNA GITHUB USERNAME YA ORG
  projectName: 'physical-ai-textbook',       // ← APNA REPO NAME

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Serve docs from the site's root
          homePageId: 'intro', // Set your main introduction document as the homepage
          // Ab sahi edit URL banega
          editUrl: 'https://github.com/physical-ai/physical-ai-textbook/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/physical-ai/physical-ai-textbook/edit/main/blog/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Physical AI Textbook',
      logo: {
        alt: 'Physical AI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Textbook',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/physical-ai/physical-ai-textbook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Textbook',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Discord', href: 'https://discord.gg/your-discord' },
            { label: 'Twitter', href: 'https://twitter.com/your-twitter' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            {
              label: 'GitHub',
              href: 'https://github.com/physical-ai/physical-ai-textbook',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI Textbook. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;