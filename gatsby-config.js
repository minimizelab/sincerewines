/* eslint-disable @typescript-eslint/camelcase */
const config = require('./src/config/siteConfig');

module.exports = {
  siteMetadata: {
    title: config.title,
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
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
