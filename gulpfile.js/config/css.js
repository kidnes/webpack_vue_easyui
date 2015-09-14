/**
 * @file css输出配置文件
 * @desc css输出配置文件
 *
 * @author liubin29@baidu.com
 *
 */

var config = require('./');
// var easyui = require('easyui/themes/default/easyui.css');

// console.log(easyui);
module.exports = {
    src: [
        'easyui/themes/default/easyui.css'
    ],
    dest: config.publicDirectory + '/css/'
};