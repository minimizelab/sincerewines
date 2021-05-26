/* eslint-disable @typescript-eslint/explicit-function-return-type */
module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048]
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
