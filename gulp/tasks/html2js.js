'use strict';

var gulp          = require('gulp');
var html2js       = require('gulp-ng-html2js');
var concat        = require('gulp-concat');
var config        = global.config;
var foldersSrc    = config.folders.src;
var foldersBuild  = config.folders.build;
var filesTpl      = config.files.tpl;
var outputName    = 'common-templates.js'

gulp.task('html2js',function(){
  return gulp.src( foldersSrc + '/' + filesTpl )
    .pipe( html2js( {
      moduleName: 'common-templates'
    }))
    .pipe( concat( outputName ) )
    .pipe( gulp.dest( foldersBuild + '/app' ) );
});
