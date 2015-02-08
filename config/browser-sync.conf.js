module.exports = {
  serve: function() {
    var gulp        = global.gulp;
    var browserSync = global.browserSync;
    var src         = global.options.src;
    var files       = global.options.files;

    browserSync({
      server: {
        baseDir: src
      }
    });
    gulp.watch(files, {cwd: src}, browserSync.reload);
  }
}
