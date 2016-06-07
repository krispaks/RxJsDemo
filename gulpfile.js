const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel-compile', () => {
    return gulp.src('./app/**/*.js')
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe(gulp.dest('./lib'));
});