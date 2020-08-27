const gulp = require('gulp');
const rename = require('gulp-rename');

gulp.task('yd', function() {
    return gulp.src('./src/html/1.html')
        .pipe(gulp.dest('./dist/html'));
});