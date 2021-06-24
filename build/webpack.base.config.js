const path = require('path');
const config = require('../config');

module.exports = {
  mode: 'base',
  entry: {
    'index': './src/index.js',
  },
  output: {
    path: config.build.assetsRoot,
    chunkFilename: 'js/[name].chunk.js',
    filename: `${config.build.buildName}.js`,
    publicPath: config.build.assetsPublicPath,
    // library: 'common',
    // libraryExport: "default", // 对外暴露default属性，就可以直接调用default里的属性
    // libraryTarget: 'umd', // 定义打包方式Universal Module Definition,同时支持在CommonJS、AMD和全局变量使用
    // globalObject: 'this', // 定义全局变量,兼容node和浏览器运行，避免出现"window is not defined"的情况
    library: {
      name: 'common',
      type: 'module',
    },
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'eslint-loader',
        enforce: 'pre', // 编译前检查
        include: [path.resolve(__dirname, 'src')], // 指定检查目标
        options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
          formatter: require('eslint-friendly-formatter'), // 指定错误报告的格式规范
        },
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
    ],
  },
  // 代码分割codeSpliting
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 20000,
    }
  },
  plugins: [
  ],
};