require('./../routes/index.js');
const chai = require('chai');

chai.should();

describe('Testing', () => {
  describe('#Test', () => {
    describe('.success', () => {
      it('runs the test suite', () => {
        true.should.eql(true);
      });
    });
  });
});
