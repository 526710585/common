/*
 * @Author: your name
 * @Date: 2020-12-10 15:19:52
 * @LastEditTime: 2020-12-31 15:07:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tools\.eslintrc.js
 */

const path = require('path');

module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  extends: [
    path.join(__dirname, './scripts/eslint-rules/base.js'),
    path.join(__dirname, './scripts/eslint-rules/import.js')
  ],
  env: {
    es6: true,
    browser: true,
  },
  globals: {
    //commjs中的全局变量
    "TGAJSMethods": "readonly",
  },
  plugins: [],
  rules: {

  },
};
