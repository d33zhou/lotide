const eqArrays = require('./eqArrays');

// write to console if assertion passed or not
const assertArraysEqual = function(actual, expected) {
  let evalEqual;
  
  eqArrays(actual, expected) ? evalEqual = `✅✅✅ Assertion Passed: ${actual} === ${expected}` : evalEqual = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  console.log(evalEqual);
};

module.exports = assertArraysEqual;