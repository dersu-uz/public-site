const path = require('path')

module.exports = {
  webpack5: true,
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
