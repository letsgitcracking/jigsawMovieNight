require('./../routes/index.js');
const chai = require('chai');

chai.should();

describe('Testing', () => {
  describe('#Test', () => {
    describe('.success', () => {
      it('runs the test suite', () => {
        true.should.eql("WOOOOoooooo testing!! We love testing.. you'd better not ignore me :)");
      });
    });
  });
});
