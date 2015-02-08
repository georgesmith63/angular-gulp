module.exports = {
  serveBuild: function() {
    var gulp         = global.gulp;
    var browserSync  = global.browserSync;
    var foldersBuild = global.options.folders.build;
    var files        = '**/*'

    browserSync({
      server: {
        baseDir: foldersBuild
      }
    });
    gulp.watch(files, {cwd: foldersBuild}, browserSync.reload);
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
