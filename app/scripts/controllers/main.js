'use strict';

/**
 * @ngdoc function
 * @name bibbbleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bibbbleApp
 */
angular.module('bibbbleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
