process.env.NODE_ENV = 'testProduction';
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  module: {
    rules: [
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  // 优化项
  optimization: {

  },
});

module.exports = webpackConfig;