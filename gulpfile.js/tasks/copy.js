var config       = require('../config/copy');
var gulp         = require('gulp');

gulp.task('copy', function() {
    gulp.src(config.assetSrc)
        .pipe(gulp.dest(config.assetDest));
        
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});