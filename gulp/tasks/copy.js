'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');
var config      = global.config;
var folders     = config.folders;
var files       = config.files;
var vendor      = config.vendor;

gulp.task('copy:build', function() {
  return runSequence(['copy:build:js',
               'copy:build:vendorJs',
               'copy:build:vendorCss',
               'copy:build:vendorFonts']);
})
gulp.task('copy:build:js', function() {
  files = [
    folders.src + '/' + files.html,
    folders.src + '/' + files.js,
    folders.src + '/' + files.tpl
  ];
  return gulp.src( files )
    .pipe( gulp.dest( folders.build ) );
});
gulp.task('copy:build:vendorJs', function() {
  return gulp.src( vendor.js.files )
    .pipe( gulp.dest( folders.build + '/' + vendor.js.target ) );
});
gulp.task('copy:build:vendorCss', function() {
  return gulp.src( vendor.css.files )
    .pipe( gulp.dest( folders.build + '/' + vendor.css.target ) );
});
gulp.task('copy:build:vendorFonts', function() {
  gulp.src( vendor.fonts.files )
    .pipe( gulp.dest( folders.build + '/' + vendor.fonts.target ) );
})

gulp.task('copy:dist', function() {
  return gulp.src( folders.src + '/' + files.html )
    .pipe( gulp.dest( folders.dist ))
  gulp.src( vendor.js.files )
    .pipe( gulp.dest( folders.dist + '/' + vendor.js.target ) );
  gulp.src( vendor.css.files )
    .pipe( gulp.dest( folders.dist + '/' + vendor.css.target ) );
  gulp.src( vendor.fonts.files )
    .pipe( gulp.dest( folders.dist + '/' + vendor.fonts.target ) );
});
