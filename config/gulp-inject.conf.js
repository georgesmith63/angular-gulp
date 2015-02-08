module.exports = {
  injectBuild: function() {
    gulp         = global.gulp;
    gulpInject   = global.gulpInject;
    foldersBuild = global.options.folders.build;
    filesHtml    = global.options.files.html;
    filesJs      = global.options.files.js;
    filesCss     = global.options.files.css;

    gulp.src( foldersBuild + '/' + filesHtml )
      .pipe( gulpInject( gulp.src( foldersBuild + '/' + filesJs,  {read: false}), {relative: true}))
      .pipe( gulpInject( gulp.src( foldersBuild + '/' + filesCss, {read: false}), {relative: true}))
      .pipe( gulp.dest( foldersBuild ));
  },
  injectDist: function() {
    gulp         = global.gulp;
    gulpInject   = global.gulpInject;
    foldersDist  = global.options.folders.dist;
    filesHtml    = global.options.files.html;
    filesJs      = global.options.files.js;
    filesCss     = global.options.files.css;

    gulp.src( foldersDist + '/' + filesHtml )
      .pipe( gulpInject( gulp.src( foldersDist + '/' + filesJs,  {read: false}), {relative: true}))
      .pipe( gulpInject( gulp.src( foldersDist + '/' + filesCss, {read: false}), {relative: true}))
      .pipe( gulp.dest( foldersDist ));
  }
}
