angular.module( 'angularSeed', [
  'common-templates',
  'angularSeed.home',
  'angularSeed.header',
  'angularSeed.example',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
  $urlRouterProvider.otherwise( '/home' );

  $stateProvider
  .state('home', {
    url: '/home',
    views: {
      'header': {
        templateUrl: 'app/header/header.tpl',
        controller: 'HeaderCtrl'
      },
      'main': {
        templateUrl: 'app/home/home.tpl',
        controller: 'HomeCtrl'
      },
      'footer': {
        templateUrl: 'app/footer/footer.tpl'
      }
    },
    data: {
      pageTitle: 'Home'
    }
  })
  .state('example', {
    url: '/example',
    views: {
      'header': {
        templateUrl: 'app/header/header.tpl',
        controller: 'HeaderCtrl'
      },
      'main': {
        templateUrl: 'app/example/example.tpl',
        controller: 'ExampleCtrl'
      },
      'footer': {
        templateUrl: 'app/footer/footer.tpl'
      }
    },
    data: {
      pageTitle: 'Home'
    }
  });
  $locationProvider
    .html5Mode(false)
    .hashPrefix('!');
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | angular-seed' ;
    }
  });
})

;
