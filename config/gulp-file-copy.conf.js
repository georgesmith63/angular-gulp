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

    gulp.src( files )
      .pipe( gulp.dest( foldersBuild ) );
  },
  copyVendor: function() {
    gulp              = global.gulp;
    foldersSrc        = global.options.folders.src;
    vendor            = global.options.vendor;
    vendorFonts       = global.options.vendor;
    foldersBuild      = global.options.folders.build;

    gulp.src( vendor.js.files )
      .pipe( gulp.dest( foldersBuild + '/' + vendor.js.target ) );
    gulp.src( vendor.css.files )
      .pipe( gulp.dest( foldersBuild + '/' + vendor.css.target ) );
    gulp.src( vendor.fonts.files )
      .pipe( gulp.dest( foldersBuild + '/' + vendor.fonts.target ) );
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
