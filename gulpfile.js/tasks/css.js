var config = require('../config/css');
var gulp   = require('gulp');
var minify = require('gulp-minify-css');
var rev    = require('gulp-rev');


gulp.task('css', function(){

  return gulp.src(config.src)
    // .pipe(rev())
    .pipe(minify())
    .pipe(gulp.dest(config.dest))
    .pipe(rev.manifest('dist/rev-manifest.json', {merge: true}))
    .pipe(gulp.dest(''));
});