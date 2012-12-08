'use strict';


// Declare app level module which depends on filters, and services
var madlibs = angular.module('madlibs', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
  

  
    $routeProvider.when('/robrbecker/apps/workspace/weblibs/index.html', {templateUrl: 'partials/welcome.html', controller: WelcomeCtrl});
    $routeProvider.when('/input', {templateUrl: 'partials/input.html', controller: InputCtrl});
    $routeProvider.when('/read', {templateUrl: 'partials/read.html', controller: ReadCtrl});
    //$routeProvider.otherwise({redirectTo: '/robrbecker/apps/workspace/weblibs/index.html'});
    $routeProvider.otherwise({templateUrl: 'partials/welcome.html', controller: WelcomeCtrl})
  }]);

madlibs.run(function($rootScope) {
    $rootScope.pos=0;
    $rootScope.words = [];
    $rootScope.story = [
      'Adjective',
      'Superlative',
      'Noun',
      'Verb'
    ];
});