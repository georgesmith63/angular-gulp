var gulp         = require('gulp');
var less         = require('gulp-less');
var concat       = require('gulp-concat');
var path         = require('path');
var config       = global.config;
var packageJson  = global.packageJson;
var foldersSrc   = config.folders.src;
var foldersBuild = config.folders.build;
var foldersDist  = config.folders.dist;
var filesLess    = config.files.less;


gulp.task('less:build', function() {
  gulp.src( foldersSrc + '/' + filesLess )
    .pipe( less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe( gulp.dest( foldersBuild ));
});

gulp.task('less:dist', function() {
  var cssFile = packageJson.name + '-' +  packageJson.version + '.css';
  gulp.src( foldersSrc + '/' + filesLess )
    .pipe( less ({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe( concat( cssFile ))
    .pipe( gulp.dest( foldersDist ));
})
//   lessDist: function() {
//     gulp           = global.gulp;
//     gulpLess       = global.gulpLess;
//     path           = global.path;
//     foldersSrc     = global.options.folders.src;
//     foldersDist    = global.options.folders.dist;
//     filesLess      = global.options.files.less;
//     gulpConcat     = global.gulpConcat;
//
//     cssFile = global.packageJson.name + '-' +  global.packageJson.version + '.css';
//
//   }
// }
