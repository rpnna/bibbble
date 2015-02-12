'use strict';

/**
 * @ngdoc function
 * @name bibbbleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bibbbleApp
 */
angular.module('bibbbleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
