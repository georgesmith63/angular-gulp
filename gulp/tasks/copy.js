'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');
var config      = global.config;
var srcFolder   = config.app.src.folder;
var buildFolder = config.app.build.folder;

gulp.task('copy:build', function() {
  var files = [
    srcFolder + '/**/*.html',
    srcFolder + '/**/*.tpl',
    srcFolder + '/**/*.js'
  ];
  return gulp.src( files )
    .pipe( gulp.dest( buildFolder ) );
});
