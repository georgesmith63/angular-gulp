'use strict';

var gulp        = require('gulp');
var gulpInject  = require('gulp-inject');
var config      = global.config;
var foldersBuild = config.folders.build;
var filesHtml    = config.files.html;
var filesJs      = config.files.js;
var filesCss     = config.files.css;
var angularFilesort = require('gulp-angular-filesort');
var vendorJs     = config.vendor.js.files;

gulp.task('inject:build',function() {

    var files = [];
    for (var i = 0; i < vendorJs.length; i++) {
      var file = vendorJs[i];
      var fileSplit = file.split('/');
      files.push( foldersBuild + '/vendor/' + fileSplit[fileSplit.length - 1]);
    }

    return gulp.src( foldersBuild + '/' + filesHtml )
      .pipe( gulpInject( gulp.src( files ), {name:'vendor', relative: true}))
      .pipe( gulpInject( gulp.src( foldersBuild + '/app/' + filesJs).pipe(angularFilesort()), {name:'app', relative: true}))
      .pipe( gulpInject( gulp.src( foldersBuild + '/' + filesCss), {relative: true}))
      .pipe( gulp.dest( foldersBuild ));
});

gulp.task('inject:dist', function() {
    // gulp         = global.gulp;
    // gulpInject   = global.gulpInject;
    // foldersDist  = global.options.folders.dist;
    // filesHtml    = global.options.files.html;
    // filesJs      = global.options.files.js;
    // filesCss     = global.options.files.css;
    //
    // gulp.src( foldersDist + '/' + filesHtml )
    //   .pipe( gulpInject( gulp.src( foldersDist + '/' + filesJs,  {read: false}), {relative: true}))
    //   .pipe( gulpInject( gulp.src( foldersDist + '/' + filesCss, {read: false}), {relative: true}))
    //   .pipe( gulp.dest( foldersDist ));
});
