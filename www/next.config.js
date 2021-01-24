/* eslint-disable @typescript-eslint/explicit-function-return-type */
module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  async rewrites() {
    return [
      {
        source: '/admin/:slug',
        destination: 'https://sw-admin.minimize.se/:slug',
      },
    ];
  },
};
