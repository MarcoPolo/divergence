var main = angular.module('main', ['ngRoute']);

main.config(function($routeProvider){
  $routeProvider
    .when('/home', {
      templateUrl: 'partials/home'
    })
    .when('/developers', {
      templateUrl: 'partials/developers'
    })
    .when('/story', {
      templateUrl: 'partials/story'
    })
  .otherwise({redirectTo: '/home'});
});
