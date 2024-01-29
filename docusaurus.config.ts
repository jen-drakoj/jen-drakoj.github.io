import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const organizationName = "jen-drakoj";
const projectName = "jen-drakoj.github.io";

const title = "The Imaginarium of Jen Drakoj";

const config: Config = {
  title: title,
  tagline: "(coming soon)",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: `https://${projectName}`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: organizationName, // Usually your GitHub org/user name.
  projectName: projectName, // Usually your repo name.

  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "archives",
          path: "archives",
          sidebarPath: "./sidebars.ts",
          // Remove this to remove the "edit this page" links.
          //editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          breadcrumbs: false,
          showLastUpdateTime: true,
        },
        pages: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          // Remove this to remove the "edit this page" links.
          //editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
          blogTitle: "The Chronicles of Jen",
          blogDescription: "A collection of random thoughts and ideas",
          blogSidebarTitle: "All posts",
          postsPerPage: "ALL",
          blogSidebarCount: "ALL",
          feedOptions: {
            type: "all",
            copyright: `© ${new Date().getFullYear()}`,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      // style: "primary",
      hideOnScroll: true,
      title: title,
      logo: {
        alt: "Jen Drakoj logo",
        src: "img/dragon.png",
        // src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Archives",
        },
        { to: "/blog", label: "Chronicles", position: "left" },
        { to: "/now", label: "Now", position: "left" },
        { to: "/about", label: "About", position: "left" },
        {
          href: `https://github.com/${organizationName}`,
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      /*links: [
        {
          title: "Archives",
          items: [
            {
              label: "Tutorial",
              to: "/archives/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/jen_drakoj",
            },
            {
              label: "Bluesky",
              href: "https://bsky.app/profile/jendrakoj.bsky.social",
            },
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
              href: "https://github.com/jen-drakoj",
            },
          ],
        },
      ],*/
      copyright: `© ${new Date().getFullYear()} – Built with <b>Docusaurus</b>`,
    },
    prism: {
      theme: prismThemes.oneDark,
      darkTheme: prismThemes.oneDark,
      defaultLanguage: "cpp",
      additionalLanguages: [
        "powershell",
        "bash",
        "csharp",
        "fsharp",
        "c",
        "gml",
        "git",
        "latex",
        "css",
        "diff",
        "makefile",
      ],
    },

    // announcementBar: {
    //   id: "announcement_bar",
    //   content: "⚠️⚠️⚠️ <b>Under construction</b> ⚠️⚠️⚠️",
    //   backgroundColor: "#fafbfc",
    //   textColor: "#091E42",
    //   isCloseable: false,
    // },
  } satisfies Preset.ThemeConfig,
};

export default config;
