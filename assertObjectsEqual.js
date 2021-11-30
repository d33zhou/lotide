const eqObjects = require('./eqObjects');

// take in two objects, and log whether they match or not
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let evalEqual;
  
  eqObjects(actual, expected) ? evalEqual = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    : evalEqual = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;

  console.log(evalEqual);
};

module.exports = assertObjectsEqual;