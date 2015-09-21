var config = require('./')

module.exports = {
    root: process.cwd() + config.publicDirectory.substr(1),
    port: process.env.PORT || 5000,
    mockRoot: process.cwd() + config.root.substr(1),
    mockLocal: true,   //本地模拟数据和远程服务器数据切换
    mockRemote: {
        server: 'albtest.baidu.com',
        port: 8090
    },
    remote: {
        headers: {
            // 'Accept': '*/*',
            // 'Accept-Encoding': 'gzip, deflate',
            // 'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4,nb;q=0.2',
            // 'Cache-Control': 'no-cache',
            // 'Connection': 'keep-alive',
            // 'Content-Length': '24',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            // 'Cookie': 'JSESSIONID=BC36F1E9CBCC95A1C132FC1A1784A81A.worker1; __cas__rn__=0; ALBFROMURL="http://albtest.baidu.com:8090/alb/contract/updateframe/index?null"; ALB_JUMP_TO_UC=true; __cas__st__15=c3a2207e20fdfded3fb9a7dca7d8c3b65168eb68fee5f9ac91b1a7018a849b7f490699a27bd99b9a2d03abb9; __cas__id__15=1792106; BAIDUPASSPORTSID=420569; FROMERP=FALSE; alb_login_ticket=ab27exc74faddc602d190',
            // 'Host': 'albtest.baidu.com:8090',
            // 'Origin': 'http://albtest.baidu.com:8090',
            // 'Pragma': 'no-cache',
            // 'RA-Sid': '7B7E21FD-20150515-053517-a76f4d-4a4aae',
            // 'RA-Ver': '3.0.7',
            // 'Referer': 'http://albtest.baidu.com:8090/alb/contract/updateframe/index',
            // 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.152 Safari/537.36',
            // 'X-Requested-With': 'XMLHttpRequest'
        }
    },
    logLevel: process.env.NODE_ENV ? 'combined' : 'dev',
    staticOptions: {
        extensions: ['html', 'js'],
        maxAge: '31556926',
        gzip: true
    }
};
