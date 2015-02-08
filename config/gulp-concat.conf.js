module.exports = {
  concatJavascript: function() {
    gulp          = global.gulp;
    gulpConcat    = global.gulpConcat;
    angularPrefix = global.options.angularPrefix;
    angularSuffix = global.options.angularSuffix;

    return gulp.src([angularPrefix, 'src/app/app.js', 'src/common/**/*.js', angularSuffix])
      .pipe(gulpConcat('vendor.js'))
      .pipe(gulp.dest('dest/'));

  }
}
