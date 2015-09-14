/**
 * @file 渲染html文件
 * @desc 使用velocity模板引擎渲染
 *         vm字段表示velocity模板配置项
 *
 * @author liubin29@baidu.com
 *
 */

var config = require('./');

module.exports = {
    watch: config.sourceDirectory + '/index.html',
    src: [config.sourceDirectory + '/index.html', '!**/{layouts,shared}/**'],
    dest: config.publicDirectory
};
