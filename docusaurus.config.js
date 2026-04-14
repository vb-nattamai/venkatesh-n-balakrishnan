// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Venkatesh Babu Nattamai Balakrishnan',
  tagline: 'Director of Software Engineering · AI-Driven Delivery · Agentic SDLC',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://vb-nattamai.github.io',
  baseUrl: '/venkatesh-n-balakrishnan/',

  organizationName: 'vb-nattamai',
  projectName: 'venkatesh-n-balakrishnan',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

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
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
        },
        blog: {
          showReadingTime: true,
          routeBasePath: 'blog',
          blogTitle: 'Writing',
          blogDescription: 'Essays and notes on software engineering, AI systems, and engineering leadership.',
          postsPerPage: 10,
          blogSidebarCount: 0,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
      metadata: [
        {name: 'description', content: 'Venkatesh Babu Nattamai Balakrishnan — Director of Software Engineering focused on AI-driven software delivery, agentic SDLC, and high-performance engineering organizations.'},
        {name: 'keywords', content: 'software engineering, AI, agentic SDLC, platform engineering, engineering leadership, context engineering'},
      ],
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Venkatesh Babu Nattamai Balakrishnan',
        hideOnScroll: false,
        items: [
          {to: '/blog', label: 'Writing', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'ideasSidebar',
            position: 'left',
            label: 'Ideas',
          },
          {to: '/projects', label: 'Projects', position: 'left'},
          {to: '/about', label: 'About', position: 'left'},
          {
            href: 'https://github.com/vb-nattamai',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Site',
            items: [
              {label: 'Writing', to: '/blog'},
              {label: 'Ideas', to: '/docs/intro'},
              {label: 'Projects', to: '/projects'},
              {label: 'About', to: '/about'},
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/vb-nattamai',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/venkatesh-n-balakrishnan/',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Venkatesh Babu Nattamai Balakrishnan · Director of Software Engineering`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json', 'yaml', 'python'],
      },
    }),
};

export default config;
