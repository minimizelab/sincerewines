/* eslint-disable @typescript-eslint/explicit-function-return-type */
module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  async redirects() {
    return [
      {
        source: '/admin/:p*',
        destination: 'https://sw-admin.minimize.se/',
        permanent: true,
      },
    ];
  },
};
