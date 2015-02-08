module.exports = {
  clean: function() {
    var gulp      = global.gulp;
    var gulpClean = global.gulpClean;
    var dest      = global.options.dest;

    return gulp.src(dest, {read: false})
      .pipe(gulpClean());
  }
}
