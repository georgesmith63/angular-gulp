module.exports = {
  cleanBuild: function() {
    var gulp         = global.gulp;
    var gulpClean    = global.gulpClean;
    var foldersBuild = global.options.folders.build;

    return gulp.src(foldersBuild, {read: false})
      .pipe(gulpClean());
  },
  cleanDist: function() {
    var gulp      = global.gulp;
    var gulpClean = global.gulpClean;
    var dist      = global.options.dist;

    return gulp.src(dist, {read: false})
      .pipe(gulpClean());
  }
}
