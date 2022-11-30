const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCss = require('gulp-cssmin');
const renameCss = require('gulp-rename');

// gulp创建任务
gulp.task('sass', function () {
  return gulp
    .src('../packages/theme-lucky/src/index.scss') // 编写的scss文件路径
    .pipe(sass()) // 将scss编译成css
    .pipe(renameCss('index.css')) // 重命名压缩后的css
    .pipe(gulp.dest('../lib')) // 未压缩的css存放目录
    .pipe(minifyCss()) // 压缩css
    .pipe(renameCss('index.min.css')) // 重命名压缩后的css
    .pipe(gulp.dest('../lib')); // 压缩后的css存放位置
});
