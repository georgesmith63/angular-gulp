module.exports = {
  injectBuild: function() {
    gulp         = global.gulp;
    gulpInject   = global.gulpInject;
    foldersSrc   = global.options.folders.src;
    foldersBuild = global.options.folders.build;
    fileHtml     = global.options.files.html;
    fileJs       = global.options.files.js;

    gulp.src( foldersSrc + '/' + fileHtml )
      .pipe( gulpInject( gulp.src( foldersSrc + '/' + fileJs, {read: false}), {relative: true}))
      .pipe( gulp.dest( foldersBuild ));
  }
}
