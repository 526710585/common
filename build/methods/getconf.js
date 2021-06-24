const path = require('path');
const config = require('../config');
const getFilesName = require('./getFilesName');

function getconf(){
  const fileArr = getFilesName(path.resolve(__dirname, '../../src/game/'));

}

getconf()