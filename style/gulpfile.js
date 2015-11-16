var gulp = require('gulp');
var path = require('path');

var autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    haml = require('gulp-ruby-haml'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass');

gulp.task('styles', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(sass({
      compass: true
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('build/'))
    .pipe(connect.reload());
});

gulp.task('haml', function() {
  return gulp.src('**/*.haml')
    .pipe(haml({
      doubleQuote: true
    }))
    .pipe(gulp.dest('.'))
    .pipe(connect.reload());
})

gulp.task('html', function() {
  return gulp.src('**/*.html')
    .pipe(connect.reload());
});

gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    port: 4000
  });
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['styles']);
  gulp.watch('**/*.haml', ['haml']);
  gulp.watch('**/*.html', ['html']);
});

gulp.task('default', ['webserver', 'watch']);