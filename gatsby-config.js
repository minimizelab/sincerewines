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
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, 'assets', `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
    'gatsby-plugin-offline',
  ],
};
