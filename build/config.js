const configArr = [
  {
    libraryTarget:'umd',
    globalObject: 'this',
    name:'umd'
  },
  {
    libraryTarget:'var',
    name:'window'
  },
  {
    libraryTarget:'module',
    name:'esm'
  },
]
const configObj = {
  library:'common'
}
module.exports = {configArr,configObj}