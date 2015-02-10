'use strict';
  var gulp = require('gulp');
  var gulpConcat  = require('gulp-concat');
  var gulpUglify  = require('gulp-uglify');
  var folderJs    = global.config.folders.build;
  var filesJs     = global.config.files.js;
  var folderDist  = global.config.folders.dist;
  var packageJson = require('./../../package.json')
  var outputName  = packageJson.name + '-' +  packageJson.version + '.js';
  var files = [
    folderJs + '/' + filesJs
    ];
gulp.task('uglify',function(){
        return gulp.src(files)
          .pipe(gulpUglify())
          .pipe(gulpConcat(outputName))
          .pipe( gulp.dest(folderDist) );
});
