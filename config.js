'use strict';

module.exports = {
  app: {
    src: {
      index:  'index.html',
      folder: './src'
    },
    build: {
      index:  'index.html',
      folder: './build'
    },
    dist: {},
    prefix: 'gulp/angular.prefix',
    suffix: 'gulp/angular.suffix'
  },
  vendor: {
    angular: {
      js: {
        build: 'vendor',
        dest:  '',
        files: [
          './bower_components/jquery/dist/jquery.js',
          './bower_components/angular/angular.js',
          './bower_components/angular-ui-router/release/angular-ui-router.js' ],
      }
    },
    bootstrap: {
      js: {
        build: 'vendor',
        dest:  '',
        files: ['./bower_components/bootstrap/dist/js/bootstrap.js']
      },
      css: {
        build: 'vendor',
        dest:  '',
        files: ['./bower_components/bootstrap/dist/css/bootstrap.min.css']
      },
      fonts: {
        build: 'vendor/fonts',
        dest:  '',
        files: [
          './bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot',
          './bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg',
          './bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
          './bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff'
        ]
      }
    },
    polymer: {
      html: {
        build: '',
        dest:  '',
        files: ['./components/bower_components/**']
      }
    }
  }
}
