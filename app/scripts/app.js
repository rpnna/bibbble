'use strict';

/**
 * @ngdoc overview
 * @name bibbbleApp
 * @description
 * # bibbbleApp
 *
 * Main module of the application.
 */
angular
  .module('bibbbleApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/:list', {
        templateUrl: 'views/listShots.html',
        controller: 'ListCtrl'
      })
      .when('/shots/:id', {
        templateUrl: 'views/shot.html',
        controller: 'ShotCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/popular'
      });
  });
