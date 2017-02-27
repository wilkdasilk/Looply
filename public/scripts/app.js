angular
  .module('looply', ['ngRoute'])
  .config(config);

  config.$inject = ['$routeProvider', '$locationProvider'];

  function config(   $routeProvider,   $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: '/templates/loop-index',
        controller: 'LoopIndexController',
        controllerAs: 'loopIndexCtrl'
      })
      .when('/loops/:id', {
        templateUrl: '/templates/loop-show',
        controller: 'LoopShowController',
        controllerAs: 'loopShowCtrl'
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
