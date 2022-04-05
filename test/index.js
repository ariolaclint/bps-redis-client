let chai = require('chai');
var expect = chai.expect

describe('Awesome test.', () => {
  it('should test similar name', (done) => {
    let name = "Clint Ariola"

    expect(name).to.equal("Clint Ariola");
    done();
  });

});