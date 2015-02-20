'use strict';

/**
 * @ngdoc function
 * @name bibbbleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bibbbleApp
 */
angular.module('bibbbleApp')
  .controller('MainCtrl', function ($scope, $location) {

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

  });
