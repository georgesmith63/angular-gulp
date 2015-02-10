module.exports = {
    uglifyBuild: function(){
        gulp        = global.gulp;
        gulpConcat  = global.gulpConcat;
        gulpUglify  = global.gulpUglify;
        folderJs    = global.options.folders.build;
        filesJs     = global.options.files.js;
        folderDist  = global.options.folders.dist;
        outputName  = global.packageJson.name + '-' +  global.packageJson.version + '.js';
        files = [
          folderJs + '/' + filesJs
        ];

        return gulp.src(files)
          .pipe(gulpUglify())
          .pipe(gulpConcat(outputName))
          .pipe( gulp.dest(folderDist) );

    }
}
