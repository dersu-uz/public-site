const path = require('path')

module.exports = {
  webpack5: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  devIndicators: {
    autoPrerender: true,
  },
}
