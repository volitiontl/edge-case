var m = require('../index.js')

describe('edge-case', function () {
  describe('main use case path', function () {

    it('sets initial input states', function () {
      m
        .input("boolean", [true, false])
        .input("int", [-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
      //to lazy to assert atm, it shouldn't throw an error.

    });
    it('loads a function with arguments types', function () {
      m
        .function("abc1", function (a,b) {
          return a
        }, ["boolean", "boolean"])
        .function("abc2", function (a,b) {
          return b
        }, ["boolean", "int"])
        //.function("abc3", function () {
        //}, ["int", "int"])


    });
    it('returns the number of edge cases', function () {
      var edgeCases = m.calculate();
      //return the count of unique states.
    })

  })

});