var gulp = require('gulp');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');


gulp.task('sass', function() {
    gulp.src('./jquery.singlefull.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest('.'));
});

gulp.task('css', function() {
    gulp.src('./jquery.singlefull.css')
        .pipe(sourcemaps.init())
        .pipe(gulp.dest('./dist'))
        .pipe(gulp.dest('./public/css'))
        .pipe(minifyCss({
            compatibility: 'ie8',
            advanced: false,
            keepSpecialComments: '1'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('js', function() {
    gulp.src('./jquery.singlefull.js')
        .pipe(sourcemaps.init())
        .pipe(gulp.dest('./dist'))
        .pipe(gulp.dest('./public/js'))
        .pipe(uglify({
            preserveComments: 'license'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'))
        .pipe(gulp.dest('./public/js'));
});

gulp.task('default', ['sass','css', 'js']);

gulp.watch(['jquery.singlefull.js','jquery.singlefull.scss'],['default']);
