module.exports = {
  lessBuild: function() {
    gulp         = global.gulp;
    gulpLess     = global.gulpLess;
    path         = global.path;
    foldersSrc   = global.options.folders.src;
    foldersBuild = global.options.folders.build;
    filesLess    = global.options.files.less;

    gulp.src( foldersSrc + '/' + filesLess )
      .pipe( gulpLess({
        paths: [ path.join(__dirname, 'less', 'includes') ]
      }) )
      .pipe( gulp.dest( foldersBuild ));
  },
  lessDist: function() {
    gulp           = global.gulp;
    gulpLess       = global.gulpLess;
    path           = global.path;
    foldersSrc     = global.options.folders.src;
    foldersDist    = global.options.folders.dist;
    filesLess      = global.options.files.less;
    gulpConcat     = global.gulpConcat;

    cssFile = global.packageJson.name + '-' +  global.packageJson.version + '.css';

    gulp.src( foldersSrc + '/' + filesLess )
      .pipe( gulpLess ({
        paths: [ path.join(__dirname, 'less', 'includes') ]
      }))
      .pipe( gulpConcat( cssFile ))
      .pipe( gulp.dest( foldersDist ));
  }
}
