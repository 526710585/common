const { merge } = require('webpack-merge');

function margeArrConfig(configObj,setArr=[]){
  if(!configObj){
    throw 'margeConfig : configObj err!'
  }
  if(!setArr){
    throw 'margeConfig : setArr err!'
  }
  if(setArr.length === 0){
    throw 'margeConfig : setArr length 0!'
  }
  const arr = setArr.map(item=>{
    const obj = merge(configObj,item) ;
    return obj;
  })
  return arr;
}

module.exports = margeArrConfig;