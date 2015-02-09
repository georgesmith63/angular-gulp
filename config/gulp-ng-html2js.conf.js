module.exports = {
  html2jsBuild: function(){
      gulp          = global.gulp;
      html2js       = global.gulpHtml2Js;
      folderSrc     = global.options.folders.src;
      filesTpl      = global.options.files.tpl;
      outputFolder  = global.options.folders.build;
      gulpConcat    = global.gulpConcat;
      outputName    = 'app/common-templates.js'

      return gulp.src(folderSrc + '/' + filesTpl)
        .pipe(html2js({
          moduleName: "common-templates"
        }))
        .pipe(gulpConcat( outputName ))
        .pipe(gulp.dest( outputFolder ));
  }
}
