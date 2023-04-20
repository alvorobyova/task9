'use strict';

const gulp = require('gulp');
const less = require('gulp-less');

const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

gulp.task('less', function () {
    return gulp.src(['./src/styles/light-theme.less', './src/styles/dark-theme.less','./src/styles/adaptive.less'])
        .pipe(less())
        .pipe(cssmin()) // минификация файла
        .pipe(rename({suffix: '.min'})) // добавление суффикса min в название css-файла
        .pipe(gulp.dest('./css'));
});

// отслеживание изменений

gulp.task('watch', function () {
    gulp.watch(['./src/styles/light-theme.less','./src/styles/dark-theme.less','./src/styles/adaptive.less' ], gulp.series('less'));
});

// стили для вкладки портфолио

gulp.task('less2', function () {
    return gulp.src(['./portfolio/src/styles/light-theme.less', './portfolio/src/styles/dark-theme.less'])
        .pipe(less())
        .pipe(cssmin()) // минификация файла
        .pipe(rename({suffix: '.min'})) // добавление суффикса min в название css-файла
        .pipe(gulp.dest('./portfolio/css'));
});

// отслеживание изменений

gulp.task('watch2', function () {
    gulp.watch(['./portfolio/src/styles/light-theme.less','./portfolio/src/styles/dark-theme.less'], gulp.series('less2'));
});