angular.module( 'angularSeed', [
  'templates-app',
  'templates-common',
  'angularSeed.home',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
  $urlRouterProvider.otherwise( '/home' );

  $stateProvider
  .state('home', {
    url: '/home',
    views: {
      'header': {
        templateUrl: 'header/header.tpl.html'
      },
      'main': {
        templateUrl: 'home/home.tpl.html',
        controller: 'HomeCtrl'
      },
      'footer': {
        templateUrl: 'footer/footer.tpl.html'
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

