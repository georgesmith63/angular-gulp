'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dist', ['clean:dist'], function() {
  return runSequence(
    'copy:dist',
    'bootstrap:dist:copy:js',
    'bootstrap:dist:copy:css',
    'bootstrap:dist:copy:fonts',
    'bootstrap:dist:inject',
    'angular:dist:copy:js',
    'angular:dist:inject',
    'less:dist',
    'html2js',
    'inject:dist');
});
