var should = require('should');

describe('[test.js] Dummy test:', function() {

  beforeEach(function() {
  });

  describe('test', function() {

    it('should pass', function() {
      var b = true;
      b.should.eql(true);
    });
  })
});
