'use strict';

/**
 * @ngdoc function
 * @name bibbbleApp.controller:ShotCtrl
 * @description
 * # ShotCtrl
 * Controller of the bibbbleApp
 */
angular.module('bibbbleApp')
  .controller('ShotCtrl', function ($scope, $http) {
  
    $http.jsonp('http://api.dribbble.com/shots/popular?callback=JSON_CALLBACK').then(function (data) {
      console.log(data);  
      $scope.list = data.data;
    });
   
  });
