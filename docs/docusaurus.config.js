// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Rune - multiplayer web games",
  tagline: "Make multiplayer games that reach a community of millions.",
  url: "http://developers.rune.ai/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://www.rune.ai/favicon.ico",

  scripts: [
    {
      src: "https://scripts.simpleanalyticscdn.com/latest.js",
      defer: true,
    },
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "rune", // Usually your GitHub org/user name.
  projectName: "rune-games-sdk", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  plugins: [
    [require.resolve("@cmfcmf/docusaurus-search-local"), { indexPages: true }],
    "docusaurus-plugin-sass",
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/social-preview.jpg",
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "Rune",
        logo: {
          alt: "Rune Logo",
          src: "/img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "quick-start",
            position: "left",
            label: "Docs",
          },
          {
            to: "/faq",
            position: "left",
            label: "FAQ",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Quick Start",
                to: "/docs/quick-start",
              },
              {
                label: "Examples",
                to: "/docs/examples",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/rune-devs",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/joinrune",
              },
              {
                label: "Instagram",
                href: "https://instagram.com/joinrune/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Rune on App Store",
                href: "https://apps.apple.com/app/rune-games-and-voice-chat/id1450358364",
              },
              {
                label: "Rune on Google Play",
                href: "https://play.google.com/store/apps/details?id=ai.rune.tincan",
              },
              {
                label: "GitHub",
                href: "https://github.com/rune/rune-games-sdk",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Rune AI, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
