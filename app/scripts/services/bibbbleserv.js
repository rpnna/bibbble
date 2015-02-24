'use strict';

/**
 * @ngdoc service
 * @name bibbbleApp.bibbbleServ
 * @description
 * # bibbbleServ
 * Service in the bibbbleApp.
 */
angular.module('bibbbleApp')
  .service('bibbbleServ', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    function loadData(path, params) {
      return $http.jsonp('http://api.dribbble.com'+ path +'?callback=JSON_CALLBACK');
    }
    
    return {
      list: function (type) {
        return loadData ("/shots/" + type);
      },
      shot: function (id) {
        return loadData ("/shots/" + id);
      }
    }
  });
