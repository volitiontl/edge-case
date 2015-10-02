var _ = require('lodash')
var counter = require('./counter')

function argsWalker(args) {
  this.args = args
  this.current = [];
  for (var i = 0; i < args.length; i++) {
    this.current.push(new counter(args[i].length))
  }

}

argsWalker.prototype.inc = function (func) {

  //check if we are finish cycling through all arrays.
  var done = true;
  _.forEach(this.current, function (value) {
    if (value.done == false) done = false;
  });
  if (done) {
    return false;
  }

  for (var i = this.current.length - 1; i >= 0; i--) {

    if (this.current[i].done == false) {
      this.current[i].inc();
      break;
    } else {
      this.current[i].reset()
    }
  }
  var args = _.map(this.current, function (value,i) {
    return value.current
  });
  func(args)
  return true;
};

argsWalker.prototype.run = function (func) {
  var args = _.map(this.current, function (value) {
    return value.current
  });
  func(args);
  while (this.inc(func)){}
};


module.exports = argsWalker