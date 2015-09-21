var gulp     = require('gulp');
var config   = require('../config/server');
var gutil    = require('gulp-util');
var open     = require('open');
var app      = require('koa')();
var mock     = require('../lib/mockMiddleware');
var staticCache = require('koa-static');

gulp.task('server', ['copy', 'watch', 'webpack:development'], function() {
    var url = 'http://localhost:' + config.port;

    app.use(staticCache(config.root, config.staticOptions));

    app.use(config.mockLocal ? mock.mockLocal : mock.mockRemote);

    app.listen(config.port);

    gutil.log('production server started on ' + gutil.colors.green(url));
    // open(url);
});
