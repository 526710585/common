process.env.NODE_ENV = 'testProduction';
const getconf = require('./methods/getconf')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');

const webpackConfig = getconf(baseWebpackConfig, {
  mode: 'testproduction',
  devtool:'inline-source-map',
  module: {
    rules: [
    ],
  },
  plugins: [
  ],
  // 优化项
  optimization: {
    minimize: false,
  },
});
module.exports = webpackConfig;