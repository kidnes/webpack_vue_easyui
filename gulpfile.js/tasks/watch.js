var gulp     = require('gulp');
var html     = require('../config/html');
var watch    = require('gulp-watch');

gulp.task('watch', function () {
    watch(html.watch, function () {gulp.start('html');});
});
