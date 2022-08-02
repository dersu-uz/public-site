const paths = require('./src/constants/paths')

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: 'standalone',
  swcMinify: true,
  trailingSlash: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: {
        loader: '@svgr/webpack',
        options: {
          ref: true,
          svgoConfig: {
            plugins: [],
          },
        },
      },
    })

    return config
  },
  i18n: {
    locales: ['default', 'es', 'en', 'fr'],
    defaultLocale: 'default',
    localeDetection: true,
  },
  trailingSlash: false,
  rewrites() {
    const rewrites = [];

    Object.values(paths).forEach(pathObj => {
      ['es', 'fr'].forEach(locale => {
        rewrites.push({
          source: pathObj[locale],
          destination: pathObj.en,
        })
      })
    });

    return rewrites;
  },
}

module.exports = nextConfig
