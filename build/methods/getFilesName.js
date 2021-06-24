const fs = require('fs')

module.exports = function (dir) {
  const files = fs.readdirSync(dir)
  return files;
}