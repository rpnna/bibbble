'use strict';

describe('Service: bibbbleServ', function () {

  // load the service's module
  beforeEach(module('bibbbleApp'));

  // instantiate service
  var bibbbleServ;
  beforeEach(inject(function (_bibbbleServ_) {
    bibbbleServ = _bibbbleServ_;
  }));

  it('should do something', function () {
    expect(!!bibbbleServ).toBe(true);
  });

});
