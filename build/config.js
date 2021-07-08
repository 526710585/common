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
    name:'browser'
  },
]
const configObj = {
  library:'common'
}
module.exports = {configArr,configObj}