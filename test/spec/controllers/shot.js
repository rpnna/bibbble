'use strict';

describe('Controller: ShotCtrl', function () {

  // load the controller's module
  beforeEach(module('bibbbleApp'));

  var ShotCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShotCtrl = $controller('ShotCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
