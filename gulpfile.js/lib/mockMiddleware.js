var fs = require('fs');
var request = require('request');
var config = require('../config/server');
var _ = require('lodash');

var base = 'http://' + config.mockRemote.server + ':' + config.mockRemote.port;

exports.mockRemote = function *(next) {
    if (this.req.headers['x-requested-with'] !== 'XMLHttpRequest' 
        || /\.html$/g.test(this.req.url)) {
        return yield next;
    }

    var path = this.req.url.split('?')[0];
    path = path[0] === '/' ? path : '/' + path;

    var headers = _.assign(this.req.headers, config.remote.headers);

    var options = {
        url: base + path,
        method: this.req.method,
        headers: headers,
        formData: this.request.body
    };

    console.log('request:', this.req.method, this.req.url);

    var res = yield function (done) {
        function callback(error, response, body) {
            console.log('callback:', error, response, body);
            if (!error && response.statusCode == 200) {
                done(body);
            }
        }

        request(options, callback)
            .on('error', function(e) {
                console.log('error:', e);
            });
    }

    console.log('remote:', this.req.url, res);
    this.body = res;
};

exports.mockLocal = function *(next) {
    if (this.req.headers['x-requested-with'] !== 'XMLHttpRequest' 
        || /\.html$/g.test(this.req.url)) {
        return yield next;
    }

    var path = this.req.url.split('?')[0];
    path = path[0] === '/' ? path : '/' + path;
    var file = config.mockRoot + '/mock/' + this.req.method + path + '/index.json';
    console.log('file:',file,' exists:', fs.existsSync(file));
    if (fs.existsSync(file)) {
        this.body = fs.readFileSync(file, {encoding: 'utf8'});
    }
};
