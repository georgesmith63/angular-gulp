'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dist', function() {
  runSequence('clean:dist', 'concat', 'copy:dist', 'html2js:dist', 'less:dist', 'inject:dist');
});
