process.env.NODE_ENV = 'testProduction';
const getconf = require('./methods/getconf')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');
const TerserPlugin = require("terser-webpack-plugin");

const webpackConfig = getconf(baseWebpackConfig, {
  mode: 'production',
  // devtool:'none',
  module: {
    rules: [
    ],
  },
  plugins: [
  ],
  // 优化项
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
    ],
  },
});
module.exports = webpackConfig;