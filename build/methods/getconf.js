const path = require('path');
const config = require('../config');
const getFilesName = require('./getFilesName');

function getconf(){
  // 根据目录
  const fileArr = getFilesName(path.resolve(__dirname, '../../src/game/'));
  console.log(fileArr);
  // 分开环境版本 + 添加版本名称

  //输出配置
}

getconf()