'use strict';
var gulp          = require('gulp');
var html2js       = require('gulp-ng-html2js');
var config        = global.config;
var folderSrc     = config.folders.src;
var filesTpl      = config.files.tpl;
var outputFolder  = config.folders.build;
var gulpConcat    = require('gulp-concat');
var outputName    = 'app/common-templates.js'

gulp.task('html2js',function(){
    return gulp.src(folderSrc + '/' + filesTpl)
        .pipe(html2js({
          moduleName: "common-templates"
        }))
        .pipe(gulpConcat( outputName ))
        .pipe(gulp.dest( outputFolder ));
});
