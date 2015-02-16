// 'use strict';
//
// var gulp          = require('gulp');
// var concat        = require('gulp-concat');
// var config        = global.config;
// var packageJson   = global.packageJson;
// var folderSrc     = config.folders.src;
// var folderBuild   = config.folders.build;
// var angularPrefix = config.angular.prefix;
// var angularSuffix = config.angular.suffix;
// var angularJsFile = packageJson.name + '-' +
//                     packageJson.version + '.js';
//
// gulp.task('concat', function(){
//   return gulp.src( [ angularPrefix,
//       folderSrc + '/app/**/*.js',
//       folderSrc + '/common/**/*.js',
//       angularSuffix ] )
//     .pipe( concat( angularJs ) )
//     .pipe( gulp.dest( folderBuild + angularJsFile ) );
// });
