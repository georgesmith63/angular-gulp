var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function() {
  runSequence('clean:build', 'copy:build', 'less:build', 'html2js', 'inject:build');
});
