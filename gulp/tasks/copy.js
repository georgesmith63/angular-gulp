'use strict';

var gulp    = require('gulp');
var config  = global.config;
var folders = config.folders;
var files   = config.files;
var vendor  = config.vendor;

gulp.task('copy:build', function() {
  files = [
    folders.src + '/' + files.html,
    folders.src + '/' + files.js,
    folders.src + '/' + files.tpl
  ];
  gulp.src( files )
    .pipe( gulp.dest( folders.build ) );
  gulp.src( vendor.js.files )
    .pipe( gulp.dest( folders.build + '/' + vendor.js.target ) );
  gulp.src( vendor.css.files )
    .pipe( gulp.dest( folders.build + '/' + vendor.css.target ) );
  gulp.src( vendor.fonts.files )
    .pipe( gulp.dest( folders.build + '/' + vendor.fonts.target ) );
});

gulp.task('copy:dist', function() {
  gulp.src( vendor.js.files )
    .pipe( gulp.dest( folders.dist + '/' + vendor.js.target ) );
  gulp.src( vendor.css.files )
    .pipe( gulp.dest( folders.dist + '/' + vendor.css.target ) );
  gulp.src( vendor.fonts.files )
    .pipe( gulp.dest( folders.dist + '/' + vendor.fonts.target ) );
});




//   copyVendor: function() {
//     gulp              = global.gulp;
//     foldersSrc        = global.options.folders.src;
//     vendor            = global.options.vendor;
//     vendorFonts       = global.options.vendor;
//     foldersBuild      = global.options.folders.build;
//
//     gulp.src( vendor.js.files )
//       .pipe( gulp.dest( foldersBuild + '/' + vendor.js.target ) );
//     gulp.src( vendor.css.files )
//       .pipe( gulp.dest( foldersBuild + '/' + vendor.css.target ) );
//     gulp.src( vendor.fonts.files )
//       .pipe( gulp.dest( foldersBuild + '/' + vendor.fonts.target ) );
//   },
//   copyDist: function() {
//     gulp         = global.gulp;
//     foldersSrc   = global.options.folders.src;
//     filesTpl     = global.options.files.tpl;
//     filesHtml    = global.options.files.html;
//
//     foldersDist  = global.options.folders.dist;
//
//     files = [
//       foldersSrc + '/' + filesHtml,
//       foldersSrc + '/' + filesJs,
//       foldersSrc + '/' + filesTpl
//     ];
//
//     return gulp.src( files )
//       .pipe( gulp.dest( foldersDist ) );
//   }
// }
