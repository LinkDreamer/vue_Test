const path = require('path')
module.exports = {
  devServer: {
    port: 9527,
    open: true
    },
    lintOnSave: false,
    chainWebpack: (config) => {
      config.resolve.alias
        .set('@', path.join(__dirname, 'src'))
        .set('@components', path.join(__dirname, 'src/components'))
        .set('@directives', path.join(__dirname, 'src/directives'))
        .set('@filters', path.join(__dirname, 'src/filters'))
        .set('@utils', path.join(__dirname, 'src/utils'))
        .set('@api', path.join(__dirname, 'src/api'))
        .set('@views', path.join(__dirname, 'src/views'))
        }
  }
