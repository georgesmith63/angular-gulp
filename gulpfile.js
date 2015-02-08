global = {
  gulp:            require('gulp'),
  gulpClean:       require('gulp-clean'),
  gulpCleanConf:   require('./config/gulp-clean.conf.js'),
  browserSync:     require('browser-sync'),
  browserSyncConf: require('./config/browser-sync.conf.js'),
  gulpLess:        require('gulp-less'),
  gulpLessConf:    require('./config/gulp-less.conf.js'),
  gulpConcat:      require('gulp-concat'),
  gulpConcatConf:  require('./config/gulp-concat.conf.js'),
  options: {
    src:           'src',
    dest:          'dest',
    angularPrefix: 'config/angular.prefix',
    angularSuffix: 'config/angular.suffix',
    files:         ['index.html', '**/*.tpl.html', '**/*.less', '**/*.js']
  }



}
var gulp = global.gulp;

gulp.task('default', function() {});
gulp.task('serve',   global.browserSyncConf.serve);
gulp.task('clean',   global.gulpCleanConf.clean);
gulp.task('concat',  global.gulpConcatConf.concatJavascript);
