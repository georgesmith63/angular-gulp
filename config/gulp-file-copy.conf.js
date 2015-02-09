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
    vendorComponents  = global.options.vendor.components;
    vendorFonts       = global.options.vendor.fonts;
    foldersBuild      = global.options.folders.build;

    gulp.src( vendorComponents.files )
      .pipe( gulp.dest( foldersBuild + '/' + vendorComponents.target ) );

    gulp.src( vendorFonts.files )
      .pipe( gulp.dest( foldersBuild + '/' + vendorFonts.target ) );
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
