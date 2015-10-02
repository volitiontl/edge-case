var _ = require('lodash')
var args = require('./src/args-walker');


function edgeCase() {
  this.inputs = {};
  this.functions = {};

}
edgeCase.prototype.input = function (name, stateArray) {
  if (this.inputs[name])throw new Error("type already exists");
  this.inputs[name] = stateArray;
  return this;
};
edgeCase.prototype.function = function (name, func, args) {
  if (this.functions[name])throw new Error("type already exists");
  this.functions[name] = {
    func: func,
    args: args
  }
  return this;
};
edgeCase.prototype.calculate = function () {
  var results = {};


  function processFunction(funcName) {
    var mainFunc = this.functions[funcName].func

    var temp = [];
    _.forEach(this.functions[funcName].args, function (value, key) {
      temp.push(this.inputs[value])
    }.bind(this))

    var temp2 = _.map(temp, function (value) {
      return _.map(value, function (v, k) {
        return k
      })
    });

    var bigArray = [];

    var argInstance = new args(temp2)
    argInstance.run(function (arrayArgs) {

      var test = _.map(arrayArgs, function (value, key) {
        return temp[key][value]
      })


      bigArray.push(mainFunc.apply(null, test))
    });
    return _.unique(bigArray).length
  }

  _.forEach(this.functions, function (value, key) {
    results[key] = processFunction.apply(this, [key])

  }.bind(this))

  return results
};


module.exports = new edgeCase();