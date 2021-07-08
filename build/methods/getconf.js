const path = require('path');
const getFilesName = require('./getFilesName');
const {configArr,configObj}= require('../config');
const margeArrConfig = require('./margeConfig')
const baseWebpackConfig = require('../webpack.base.config');
const { merge } = require('webpack-merge');

function getconf(baseConfig,setConfig){
  // 获取目录
  const fileArr = getFilesName(path.resolve(__dirname, '../../src/game/'));
  //分开环境版本以及目录   //设置entry  //设置output
  let setArr = []
  fileArr.forEach(item=>{
    configArr.forEach(subitem=>{
      const obj = {
        entry:{},
        output:{},
        experiments:{}
      }
      obj.entry.index = `./src/game/${item}/index.js`;
      obj.output.libraryTarget = subitem.libraryTarget;
      if(subitem.libraryTarget==='module'){
        obj.experiments.outputModule = true;
      }else{
        obj.output.library = configObj.library;
      }
      if(subitem.libraryTarget==='umd'){
        obj.output.libraryExport = 'default'
      }
      if(subitem.globalObject){
        obj.output.globalObject = subitem.globalObject;
      }
      obj.output.filename = `${item}.${configObj.library}.${subitem.name}.js`;
      obj.output.path = path.resolve(__dirname, `../../dist/${item}`)
      setArr.push(obj)
    })
  })

  //合成配置
  let _baseConfig = baseConfig;
  if(setConfig){
    _baseConfig = merge(baseConfig,setConfig)
  }
  const returnArr = margeArrConfig(_baseConfig,setArr)
  //输出配置
  return returnArr;
}

module.exports = getconf