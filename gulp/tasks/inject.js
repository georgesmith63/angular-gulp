'use strict';

var gulp            = require('gulp');
var gulpInject      = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');
var config          = global.config;
var packageJson     = global.packageJson;
var filesHtml       = config.files.html;
var filesJs         = config.files.js;
var filesCss        = config.files.css;
var vendorJs        = config.vendor.js.files;

var getVendorFiles = function(folder) {
  var files = [];
  for (var i = 0; i < vendorJs.length; i++) {
    var file = vendorJs[i];
    var fileSplit = file.split('/');
    files.push( folder + '/vendor/' + fileSplit[fileSplit.length - 1]);
  }
  return files;
}

gulp.task('inject:build',function() {
  var foldersBuild = config.folders.build;
  var files = getVendorFiles( foldersBuild );
  return gulp.src( foldersBuild + '/' + filesHtml )
    .pipe( gulpInject( gulp.src( files ), {name:'vendor', relative: true}))
    .pipe( gulpInject( gulp.src( foldersBuild + '/app/' + filesJs).pipe(angularFilesort()), {name:'app', relative: true}))
    .pipe( gulpInject( gulp.src( foldersBuild + '/' + filesCss), {relative: true}))
    .pipe( gulp.dest( foldersBuild ));
});

gulp.task('inject:dist', function() {
  var foldersDist  = config.folders.dist;
  var files   = getVendorFiles( foldersDist );
  var mainJs  = foldersDist + '/' + packageJson.name + '-' + packageJson.version + '.js';
  var mainCss = foldersDist + '/' + packageJson.name + '-' + packageJson.version + '.css';

  return gulp.src( foldersDist + '/' + filesHtml )
    .pipe( gulpInject( gulp.src( files ),   {name:'vendor', relative: true}))
    .pipe( gulpInject( gulp.src( mainJs ),  {name:'app', relative: true}))
    .pipe( gulpInject( gulp.src( mainCss ), {relative: true}))
    .pipe( gulp.dest( foldersDist ));
});
