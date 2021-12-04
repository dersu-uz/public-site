const path = require('path')

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
}

module.exports = nextConfig
