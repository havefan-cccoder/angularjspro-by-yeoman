(function() {
  'use strict';

  angular
    .module('angularjsPro')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/tabledemo', {
        templateUrl: 'app/tabledemo/tabledemo.html',
        controller: 'TableDemoController',
        controllerAs: 'vm'
      })
      .when('/selectdemo', {
        templateUrl: 'app/selectdemo/selectdemo.html',
        controller: 'SelectDemoController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
