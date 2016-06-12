const gulp = require('gulp');
const babel = require('gulp-babel');
const node_modules = './node_modules/';
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const libs = [
    //NOTE: using commonjs instead of es 
    //node_modules + 'rxjs-es/**/*.*'
    node_modules + 'rxjs/**/*.*'
];

gulp.task('babel-compile', () => {
    return gulp.src('./app/**/*.js')
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe(gulp.dest('./target'));
});

gulp.task('setupLib', () => {
    return gulp.src(libs, {base: './node_modules'})
            .pipe(gulp.dest('./lib'));
});

gulp.task('webpack', ['babel-compile'], () => {
    var myConfig = Object.create(webpackConfig);
    myConfig.plugins = [
        /*new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()*/
    ];

    webpack(myConfig, (err, stats)=>{
        console.log(err)
    });
});