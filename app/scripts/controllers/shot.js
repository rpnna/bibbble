'use strict';

/**
 * @ngdoc function
 * @name bibbbleApp.controller:ShotCtrl
 * @description
 * # ShotCtrl
 * Controller of the bibbbleApp
 */
angular.module('bibbbleApp')
  .controller('ShotCtrl', function ($scope, $routeParams, bibbbleServ) {
    
    var shot_id = $routeParams.id;
    console.log("Shot's id to display:", shot_id);
  
    bibbbleServ.shot(shot_id).then(function (data) {
      console.log(data);  
      $scope.shot = data.data;
    });
   
  });
