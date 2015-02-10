'use strict';

var config = global.config;
var gulp   = require('gulp');
var clean  = require('gulp-clean');

gulp.task('clean:build', function() {
  gulp.src( config.folders.build )
    .pipe( clean() );
});
gulp.task('clean:dist', function() {
  gulp.src( config.folders.dist )
    .pipe( clean() );
});
