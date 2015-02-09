module.exports = {
  copyBuild: function() {
    gulp         = global.gulp;
    foldersSrc   = global.options.folders.src;
    filesJs      = global.options.files.js;
    filesTpl     = global.options.files.tpl;
    filesHtml    = global.options.files.html;

    foldersBuild = global.options.folders.build;

    files = [
      foldersSrc + '/' + filesHtml,
      foldersSrc + '/' + filesJs,
      foldersSrc + '/' + filesTpl
    ];

    return gulp.src( files )
      .pipe( gulp.dest( foldersBuild ) );
  },
  copyBuildVendor: function() {
    gulp         = global.gulp;
    foldersSrc   = global.options.folders.src;
    filesVendor  = global.options.vendor;
    filesHtml    = global.options.files.html;

    foldersBuild = global.options.folders.build;

    return gulp.src( filesVendor )
      .pipe( gulp.dest( foldersBuild + '/vendor' ) );
  },
  copyDist: function() {
    gulp         = global.gulp;
    foldersSrc   = global.options.folders.src;
    filesTpl     = global.options.files.tpl;
    filesHtml    = global.options.files.html;

    foldersDist  = global.options.folders.dist;

    files = [
      foldersSrc + '/' + filesHtml,
      foldersSrc + '/' + filesJs,
      foldersSrc + '/' + filesTpl
    ];

    return gulp.src( files )
      .pipe( gulp.dest( foldersDist ) );
  }
}
