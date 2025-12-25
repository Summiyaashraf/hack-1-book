import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'The Definitive Guide to Physical Intelligence & Robotics',
  favicon: 'img/favicon.ico',
  url: 'https://Summiyaashraf.github.io',
  baseUrl: '/hack-1-book.git',


  organizationName: 'https://github.com/Summiyaashraf', 
  projectName: 'hack-book-1', 
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          
          editUrl: 'https://github.com/Summiyaashraf/hack-1-book.git/tree/main/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/ph-ai-logo.png',
      navbar: {
        title: 'Physical AI & Humanoid Robotics Textbook', 
        logo: {
          alt: 'Nexus Logo',
          src: 'img/ph-ai-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Textbook',
          },
          {
            href: 'https://github.com/Summiyaashraf', 
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learning Path',
            items: [
              {
                label: 'Introduction',
                to: '/docs/introduction/intro',
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/summiya-ashraf-student-leader-of-giaic-8249792ba/', 
              },
              {
                label: 'Twitter / X',
                href: 'https://x.com/SummiyaAshraf', 
              },
            ],
          },
          {
            title: 'Project Resources',
            items: [
              {
                label: 'Source Code',
                href: 'https://github.com/Summiyaashraf/hack-1-book.git',
              },
            ],
          },
        ],
        
        copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics book Built with ❤️ by Summiya Ashraf.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;