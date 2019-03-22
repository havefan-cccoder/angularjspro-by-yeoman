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
      .when('/flexdemo', {
        templateUrl: 'app/flexdemo/flexdemo.html',
        controller: 'FlexDemoController',
        controllerAs: 'vm'
      })
      .when('/otherlittledemo', {
        templateUrl: 'app/otherlittledemo/otherlittledemo.html'
        // controller: 'OtherLittleDemoController',
        // controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
