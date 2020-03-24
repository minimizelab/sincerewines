/* eslint-disable @typescript-eslint/camelcase */
const config = require('./src/config/siteConfig');
const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: config.title,
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-postcss',
    'gatsby-plugin-zeit-now',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'json',
        path: path.join(__dirname, 'src', 'content', 'json'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'content', 'images'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'producers',
        path: path.join(__dirname, 'src', 'content', 'producers'),
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: config.projectId,
        dataset: config.dataset,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '3',
        matomoUrl: 'https://stats.minimize.se',
        siteUrl: 'https://www.sincerewines.com',
        disableCookies: true,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1440,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Sincere Wines',
        short_name: config.shortTitle,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icon: config.siteIcon, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true,
        tailwind: true,
      },
    },
    'gatsby-plugin-offline',
  ],
};
