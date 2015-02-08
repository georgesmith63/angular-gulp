module.exports = {
  copyBuild: function() {
    gulp         = global.gulp;
    folderSrc    = global.options.folders.src;
    filesJs      = global.options.files.js;
    filesTpl     = global.options.files.tpl;
    filesHtml    = global.options.files.html;

    folderBuild  = global.options.folders.build;

    files = [
      folderSrc + '/' + filesHtml,
      folderSrc + '/' + filesJs,
      folderSrc + '/' + filesTpl
    ];

    return gulp.src( files )
      .pipe( gulp.dest( folderBuild ) );
  },
  copyDist: function() {
    gulp         = global.gulp;
    folderSrc    = global.options.folders.src;
    filesJs      = global.options.files.js;
    filesTpl     = global.options.files.tpl;
    filesHtml    = global.options.files.html;

    folderDist   = global.options.folders.dist;

    files = [
      folderSrc + '/' + filesHtml,
      folderSrc + '/' + filesJs,
      folderSrc + '/' + filesTpl
    ];

    return gulp.src( files )
      .pipe( gulp.dest( folderDist ) );
  }
}
