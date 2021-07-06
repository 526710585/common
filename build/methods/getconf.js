const path = require('path');
const getFilesName = require('./getFilesName');
const {configArr,configObj}= require('../config');
const margeArrConfig = require('./margeConfig')
const baseWebpackConfig = require('../webpack.base.config');

function getconf(baseConfig){
  // 获取目录
  const fileArr = getFilesName(path.resolve(__dirname, '../../src/game/'));
  //获取基本配置

  //分开环境版本以及目录   //设置entry  //设置output
  let setArr = []
  fileArr.forEach(item=>{
    configArr.forEach(subitem=>{
      const obj = {
        entry:{},
        output:{}
      }
      obj.entry.index = `./src/game/${item}/index.js`;
      obj.output.libraryTarget = subitem.libraryTarget;
      obj.output.library = configObj.library;
      obj.output.filename = `${configObj.library}.${subitem.name}.js`;
      if(subitem.globalObject){
        obj.output.globalObject = subitem.globalObject;
      }
      obj.output.path = path.resolve(__dirname, `../../dist/${item}`)
      setArr.push(obj)
    })
  })
  //合成配置
  const returnArr = margeArrConfig(baseConfig,setArr)
  //输出配置
  console.log(returnArr);

  return returnArr;
}

getconf(baseWebpackConfig)