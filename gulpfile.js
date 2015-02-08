global = {
  packageJson:      require('./package.json'),
  gulp:             require('gulp'),
  gulpRunSequence:  require('gulp-run-sequence'),
  gulpClean:        require('gulp-clean'),
  gulpCleanConf:    require('./config/gulp-clean.conf.js'),
  gulpFileCopyConf: require('./config/gulp-file-copy.conf.js'),

  browserSync:      require('browser-sync'),
  browserSyncConf:  require('./config/browser-sync.conf.js'),
  gulpLess:         require('gulp-less'),
  gulpLessConf:     require('./config/gulp-less.conf.js'),
  gulpConcat:       require('gulp-concat'),
  gulpConcatConf:   require('./config/gulp-concat.conf.js'),
  gulpInject:       require('gulp-inject'),
  gulpInjectConf:   require('./config/gulp-inject.conf.js'),
  path:             require('path'),
  gulpUglify:       require('gulp-uglify'),
  gulpUglifyConf:   require('./config/gulp-uglify.conf.js'),

  options: {
    angular: {
      prefix: 'config/angular.prefix',
      suffix: 'config/angular.suffix',
    },
    folders: {
      bower:  './bower_components',
      src:    './src',
      build:  './build',
      dist:   './dist',
    },
    files: {
      html:   'index.html',
      tpl:    '**/*.tpl',
      less:   '**/*.less',
      css:    '**/*.css',
      js:     '**/*.js',
      spec:   '**/*.spec-js'
    }
  }
}

var gulp = global.gulp;
var gulpRunSequence = global.gulpRunSequence;

gulp.task('default', function() {});

gulp.task('serve:build',  global.browserSyncConf.serveBuild);
gulp.task('server:dist',  global.browserSyncConf.serveDist);
gulp.task('clean:build',  global.gulpCleanConf.cleanBuild);
gulp.task('copy:build',   global.gulpFileCopyConf.copyBuild);
gulp.task('inject:build', global.gulpInjectConf.injectBuild);
gulp.task('uglify:build', global.gulpUglifyConf.uglifyBuild);
gulp.task('less:build',   global.gulpLessConf.lessBuild);
gulp.task('build:dist', function(){
  gulpRunSequence(
    'uglify:build'
  );
});

gulp.task('build', function() {
  gulpRunSequence(
    'clean:build',
    'copy:build',
    'serve:build'
  );
});
gulp.task('less:dist', global.gulpLessConf.lessDist);
gulp.task('copy:dist',   global.gulpFileCopyConf.copyDist);




gulp.task('concat',       global.gulpConcatConf.concatJavascript);
gulp.task('clean:dist',   global.gulpCleanConf.cleanDist);
