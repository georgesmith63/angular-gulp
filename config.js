'use strict';

module.exports = {
  angular: {
    prefix: 'config/angular.prefix',
    suffix: 'config/angular.suffix'
  },
  folders: {
    src:    './src',
    build:  './build',
    dist:   './dist'
  },
  files: {
    html:   'index.html',
    tpl:    '**/*.tpl',
    less:   '**/*.less',
    css:    '**/*.css',
    js:     '**/*.js',
    spec:   '**/*.spec-js'
  },
  vendor: {
    js: {
      files: [
        './bower_components/jquery/dist/jquery.js',
        './bower_components/angular/angular.js',
        './bower_components/angular-ui-router/release/angular-ui-router.js',
        './bower_components/bootstrap/dist/js/bootstrap.js'
      ],
      target: 'vendor'
    },
    css: {
      files: [
        './bower_components/bootstrap/dist/css/bootstrap.min.css'
      ],
      target: 'vendor'
    },
    fonts: {
      files: [
        './bower_components/bootstrap/dist/fonts/*'
      ],
      target: 'vendor/fonts'
    }
  }
}
