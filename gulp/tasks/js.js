var gulp = require('gulp');
var include = require("gulp-include");
var config = require('../config');
var browserSync = require('browser-sync');
// var babel = require("gulp-babel");
reload = browserSync.reload;

gulp.task('js', function () {
    gulp.src(config.src.js+'**/*.js')
        .pipe(include())
        .on('error', function(){notify("Javascript include error");})
        .pipe(gulp.dest(config.dest.js))
        .pipe(reload({stream: true}));
});
// gulp.task("js", function () {
//   return gulp.src(config.src.js+'**/*.js')
//     .pipe(babel({
//     	presets: ['es2015']
//     }))
//     .pipe(include())
//     .on('error', function(){notify("Javascript include error");})
//     .pipe(gulp.dest(config.dest.js))
//     .pipe(reload({stream: true}));
// });
gulp.task('js:watch', function() {
    gulp.watch(config.src.js+'*', ['js']);
});