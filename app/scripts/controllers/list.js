'use strict';

/**
 * @ngdoc function
 * @name bibbbleApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the bibbbleApp
 */
angular.module('bibbbleApp')
  .controller('ListCtrl', function ($scope, $routeParams, bibbbleServ) {
    // typeOfShot may have the following values: popular, everyone, debuts
    var typeOfShot = $routeParams.list;
    console.log("The List of shots to display:", typeOfShot);
  
    bibbbleServ.list(typeOfShot).then(function (data) {
      console.log(data);  
      $scope.list = data.data;
    });
  
  });
