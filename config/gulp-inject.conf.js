module.exports = {
  injectBuild: function() {
    gulp         = global.gulp;
    gulpInject   = global.gulpInject;
    foldersBuild = global.options.folders.build;
    filesHtml    = global.options.files.html;
    filesJs      = global.options.files.js;
    filesCss     = global.options.files.css;
    angularFilesort = global.gulpAngularFileSort;
    vendorJs     = global.options.vendor.js.files;

    files = [];
    for (var i = 0; i < vendorJs.length; ++i) {
      var file = vendorJs[i];
      var fileSplit = file.split('/');
      files.push( foldersBuild + '/vendor/' + fileSplit[fileSplit.length - 1]);
    }
    console.log(files);

    gulp.src( foldersBuild + '/' + filesHtml )
      .pipe( gulpInject( gulp.src( files ), {name:'vendor', relative: true}))
      .pipe( gulpInject( gulp.src( foldersBuild + '/app/' + filesJs).pipe(angularFilesort()), {name:'app', relative: true}))
      .pipe( gulp.dest( foldersBuild ));

    // gulp.src( foldersBuild + '/' + filesHtml )
    //   .pipe( gulp.dest( foldersBuild ));

    // gulp.src( foldersBuild + '/' + filesHtml )
    //   .pipe( gulpInject( gulp.src( foldersBuild + '/' + filesCss, {read: false}), {relative: true}))
    //   .pipe( gulp.dest( foldersBuild ));

  },
  injectDist: function() {
    // gulp         = global.gulp;
    // gulpInject   = global.gulpInject;
    // foldersDist  = global.options.folders.dist;
    // filesHtml    = global.options.files.html;
    // filesJs      = global.options.files.js;
    // filesCss     = global.options.files.css;
    //
    // gulp.src( foldersDist + '/' + filesHtml )
    //   .pipe( gulpInject( gulp.src( foldersDist + '/' + filesJs,  {read: false}), {relative: true}))
    //   .pipe( gulpInject( gulp.src( foldersDist + '/' + filesCss, {read: false}), {relative: true}))
    //   .pipe( gulp.dest( foldersDist ));
  }
}
