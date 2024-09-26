/** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
// };

// module.exports = nextConfig;

const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
  i18n,
  experimental: {
        appDir: true,
      },
  reactStrictMode: true,
  distDir: 'dist',
};

module.exports = nextConfig;