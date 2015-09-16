var app      = require('koa')();
var staticCache = require('koa-static');
var koaBody = require('koa-body')();
var mock     = require('./lib/mockMiddleware');
var config   = require('./config/server');

var url = 'http://localhost:' + config.port;

app.use(staticCache(config.root, config.staticOptions));

app.use(koaBody);

app.use(config.mockLocal ? mock.mockLocal : mock.mockRemote);

app.listen(config.port);

// open(url);
