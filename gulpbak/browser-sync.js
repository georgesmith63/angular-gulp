module.exports = {
  serveBuild: function() {
    var gulp         = global.gulp;
    var browserSync  = global.browserSync;
    var gulpFileCopyConf = global.gulpFileCopyConf;
    var gulpInjectConf   = global.gulpInjectConf;
    var foldersSrc   = global.options.folders.src;
    var foldersBuild = global.options.folders.build;
    var files        = '**/*';
    var gulpHtml2JsConf = global.gulpHtml2JsConf;

    browserSync({
      server: {
        baseDir: foldersBuild
      }
    });
    gulp.watch(files, {cwd: foldersSrc}, function() {
      gulpFileCopyConf.copyBuild();
      gulpFileCopyConf.copyVendor();
      gulpHtml2JsConf.html2jsBuild();
      gulpInjectConf.injectBuild();
      browserSync.reload();
    });
  },

  serveDist: function() {
    var gulp         = global.gulp;
    var browserSync  = global.browserSync;
    var foldersBuild = global.options.folders.dist;
    var files        = '**/*'

    browserSync({
      server: {
        baseDir: foldersBuild
      }
    });
    gulp.watch(files, {cwd: foldersBuild}, browserSync.reload);
  }
}
