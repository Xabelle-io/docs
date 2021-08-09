module.exports = {
  title: "Xabelle Documentation",
  tagline: "The future cross chain on Binance Network",
  url: "https://docs.xabelle.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "Xabelle-io", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Xabelle Docs",
      logo: {
        alt: "Xabelle Logo",
        src: "img/xal.png",
      },
      items: [
        {
          to: "getting-started/doc1",
          activeBasePath: "getting-started",
          label: "Start Here",
          position: "left",
        },
        {
          to: "guides/doc2",
          activeBasePath: "guides",
          label: "Guides",
          position: "left",
        },
        {
          to: "docs/doc3",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/Xabelle-io",
          label: "GitHub",
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
              label: "Style Guide",
              to: "docs/doc1",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Telegram",
              href: "https://t.me/XabelleProj",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/xabelle_io",
            },
          ],
        },
        {
          title: "Audit",
          items: [
            {
              label: "Certik",
              href: "http://certik.org/",
            },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: "Blog",
            //   to: "blog",
            // },
            {
              label: "GitHub",
              href: "https://github.com/Xabelle-io",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Xabelle Project`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          showLastUpdateTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
