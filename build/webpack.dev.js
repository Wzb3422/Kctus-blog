const path = require('path');
const commonConfig = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    port: 8080,
    // host: '0.0.0.0',
    // hot: true,
    // http2: true,
  }
});
