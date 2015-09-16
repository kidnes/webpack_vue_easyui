var config = require('./')

module.exports = {
  root: config.sourceDirectory,
  src: config.root + '/dep/jquery-easyui-bower/**/*',
  dest: config.publicDirectory + '/easyui/',
  assetSrc: config.root + '/asset/img/**/*',
  assetDest: config.publicDirectory + '/img/'
}