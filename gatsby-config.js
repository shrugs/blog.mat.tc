const sharp = require('sharp');
require(`dotenv`).config({
  path: `.env`,
})


sharp.cache(false);
sharp.simd(false);

module.exports = {
  siteMetadata: {
    siteTitle: `blog.mat.tc`,
    siteTitleAlt: 'blog.mat.tc',
    siteHeadline: `Minimal Blog - Gatsby Theme from @lekoarts`,
    siteUrl: `https://blog.mat.tc`,
    siteDescription: `blog.mat.tc`,
    siteLanguage: `en`,
    siteImage: '/banner.jpg',
    basePath: '/',
    blogPath: '/blog',
    showLineNumbers:  true,
    tagsPath: '/tags',
    author: `@fuck`,
    externalLinks: [
      {
        name: `Twitter`,
        url: `https://twitter.com/mattgcondon`,
      },
    ],
    navigation: [
      {
        title: `Blog`,
        slug: `/blog`,
      },
      {
        title: `About`,
        slug: `/about`,
      },
    ],
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `blog.mat.tc`,
        short_name: `blog.mat.tc`,
        description: `blog.mat.tc`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
