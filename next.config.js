const paths = require('./src/constants/paths')

const defaultLocale = 'es';

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  webpack5: true,
  swcMinify: true,
  trailingSlash: true,
  purge: ['./src/**/*.js'],
  // purge: false,
  devIndicators: {
    autoPrerender: true,
  },
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
    locales: ['es', 'en', 'fr'],
    defaultLocale,
    localeDetection: true,
  },
  trailingSlash: false,
  rewrites() {
    const rewrites = [];

    Object.values(paths).forEach(pathObj => {
      ['es', 'fr'].forEach(locale => {
        rewrites.push({
          source: pathObj[locale].replace(/\[(\w+?)\]/g, (_, path) => `:${path}`),
          destination: pathObj.en.replace(/\[(\w+?)\]/g, (_, path) => `:${path}`),
        })
      })
    });

    console.log(rewrites)

    return rewrites;
  },
}

module.exports = nextConfig
