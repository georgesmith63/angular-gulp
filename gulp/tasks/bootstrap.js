'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');
var inject      = require('gulp-inject');
var config      = global.config;
var bootstrap   = config.vendor.bootstrap;
var src         = config.app.src;
var build       = config.app.build;

// copies js files to build
gulp.task( 'bootstrap:build:copy:js', function() {
  return gulp.src( bootstrap.js.files )
    .pipe( gulp.dest( build.folder + '/' + bootstrap.js.build ) );
});
// copies css files to build
gulp.task( 'bootstrap:build:copy:css', function() {
  return gulp.src( bootstrap.css.files )
    .pipe( gulp.dest( build.folder + '/' + bootstrap.css.build ) );
});
// copies font files to build
gulp.task( 'bootstrap:build:copy:fonts', function() {
  return gulp.src( bootstrap.fonts.files )
    .pipe( gulp.dest( build.folder + '/' + bootstrap.fonts.build ) );
});
// injects the js and css to the index
gulp.task( 'bootstrap:build:inject', function() {
  var bootstrapJsSrc  = gulp.src(getVendorFiles(bootstrap.js.files, build.folder));
  var bootstrapCssSrc = gulp.src(getVendorFiles(bootstrap.css.files, build.folder));
  var options = { name: 'bootstrap', relative: true };
  return gulp.src( build.folder + '/' + build.index )
    .pipe( inject( bootstrapJsSrc, options ))
    .pipe( inject( bootstrapCssSrc, options ))
    .pipe( gulp.dest( build.folder ) );
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
