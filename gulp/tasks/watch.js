var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var runSequence  = require('run-sequence');
var config       = global.config;
var foldersSrc   = config.folders.src;
var foldersBuild = config.folders.build;
var files        = "**/*";
var filesJs      = config.files.js;
var filesLess    = config.files.less;
var filesHtml    = config.files.html;
var filesTpl     = config.files.tpl;

gulp.task('watch:build', function() {
    runSequence('clean:build', 'copy:build', 'less:build', 'html2js', 'inject:build', 'browserSync:build');
  return gulp.watch(foldersSrc + '/' + files, function() {
    runSequence('clean:build', 'copy:build', 'less:build', 'html2js', 'inject:build', 'browserSync:build');
  });
});

gulp.task('browserSync:build', function() {
  browserSync({
    server: {
      baseDir: foldersBuild
    }
  });
  return browserSync.reload();
});
//
//
// serveBuild: function() {
//
//   var browserSync  = global.browserSync;
//   var gulpFileCopyConf = global.gulpFileCopyConf;
//   var gulpInjectConf   = global.gulpInjectConf;
//   var foldersSrc   = global.options.folders.src;
//   var foldersBuild = global.options.folders.build;
//   var files        = '**/*';
//   var gulpHtml2JsConf = global.gulpHtml2JsConf;
//
//   browserSync({
//     server: {
//       baseDir: foldersBuild
//     }
//   });
//   gulp.watch(files, {cwd: foldersSrc}, function() {
//     gulpFileCopyConf.copyBuild();
//     gulpFileCopyConf.copyVendor();
//     gulpHtml2JsConf.html2jsBuild();
//     gulpInjectConf.injectBuild();
//     browserSync.reload();
//   });
// },
