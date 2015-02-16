'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');
var inject      = require('gulp-inject');
var config      = global.config;
var angular     = config.vendor.angular;
var build       = config.app.build;

// copies js files to build
gulp.task('angular:build:copy:js', function() {
  return gulp.src( angular.js.files )
    .pipe( gulp.dest( build.folder + '/' + angular.js.build ) );
});
// injects the js to the index
gulp.task('angular:build:inject', function() {
  var angularJs = gulp.src(getVendorFiles(angular.js.files, build.folder));
  var options = { name: 'angular', relative: true }
  return gulp.src( build.folder + '/' + build.index )
    .pipe( inject( angularJs, options ))
    .pipe( gulp.dest( build.folder ));
});

var getVendorFiles = function(inputFiles, folder) {
  var files = [];
  for (var i = 0; i < inputFiles.length; i++) {
    var file = inputFiles[i];
    var fileSplit = file.split('/');
    files.push( folder + '/vendor/' + fileSplit[fileSplit.length - 1]);
  }
  return files;
}
