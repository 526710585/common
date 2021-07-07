process.env.NODE_ENV = 'testProduction';
const getconf = require('./methods/getconf')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');

const webpackConfig = getconf(baseWebpackConfig, {
  mode: 'production',
  module: {
    rules: [
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),
  ],
  // 优化项
  optimization: {
    minimize: false,
  },
});

console.log(webpackConfig);
module.exports = webpackConfig;