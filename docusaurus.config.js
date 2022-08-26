// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// image attribution: https://www.pexels.com/photo/white-and-black-abstract-painting-1089397/
/* 
<a href="https://www.flaticon.com/free-icons/arcade" title="arcade icons">Arcade icons created by Freepik - Flaticon</a> 
<a href="https://www.flaticon.com/free-icons/video-game" title="video game icons">Video game icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/people" title="people icons">People icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/level-up" title="level up icons">Level up icons created by Freepik - Flaticon</a>
*/

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
require("dotenv").config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Typescript Hub",
  tagline: "Bienvenido a la comunidad de Typescript.",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "jovicon", // Usually your GitHub org/user name.
  projectName: "Typescript hub", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Typescript Hub",
        logo: {
          alt: "Typescript Hub",
          src: "img/ts-logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Biblioteca",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/jovicon/typescript-hub-web",
            label: "GitHub",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
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
                label: "Biblioteca",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/H2xNjPvk8r",
              },
              // {
              //   label: "Twitter",
              //   href: "https://twitter.com/docusaurus",
              // },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/jovicon/typescript-hub-web",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus 2.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      "docusaurus2-dotenv",
      {
        path: "./.env", // The path to your environment variables.
        safe: false, // If false ignore safe-mode, if true load './.env.example', if a string load that file as the sample
        systemvars: false, // Set to true if you would rather load all system variables as well (useful for CI purposes)
        silent: false, //  If true, all warnings will be suppressed
        expand: false, // Allows your variables to be "expanded" for reusability within your .env file
        defaults: false, //  Adds support for dotenv-defaults. If set to true, uses ./.env.defaults
      },
    ],
  ],
};

module.exports = config;
