'use strict';

var gulp        = require('gulp');
var inject      = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');
var config      = global.config;
var packageJson = global.packageJson;
var build       = config.app.build;
var appFileName = packageJson.name + '-' + packageJson.version + '.js';

gulp.task('inject:build',function() {
  var appSrc    = gulp.src( build.folder + '/app/**/*js').pipe(angularFilesort());
  var appOpt    = { name: 'app', relative: true };
  var commonSrc = gulp.src( build.folder + '/common/**/*.js').pipe(angularFilesort());
  var commonOpt = { name: 'common', relative: true };

  return gulp.src( build.folder + '/' + build.index )
    .pipe( inject( appSrc, appOpt ))
    .pipe( inject( commonSrc, commonOpt ))
    .pipe( gulp.dest( build.folder ));
});
//
// gulp.task('inject:dist', ['copy:dist', 'less:dist'], function() {
//   var foldersDist  = config.folders.dist;
//   var files    = getVendorFiles( foldersDist );
//   var jsFiles  = foldersDist + '/' + appFileName;
//   var cssFiles = foldersDist + '/' + filesCss;
//
//    return gulp.src( foldersDist + '/' + filesHtml )
//     .pipe( gulpInject( gulp.src( files ),    {name:'vendor', relative: true}))
//     .pipe( gulpInject( gulp.src( jsFiles ),  {name:'app', relative: true}))
//     .pipe( gulpInject( gulp.src( cssFiles ), {relative: true}))
//     .pipe( gulp.dest( foldersDist ));
// });
