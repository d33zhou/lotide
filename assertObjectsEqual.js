const eqArrays = function(arr1, arr2) {
  let same = true;

  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      arr1[i] !== arr2[i] ? same = false : "";
    }
  } else {
    same = false;
  }

  return same;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key in object1) {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
  } else {
    return false;
  }

  return true;
};

// take in two objects, and log whether they match or not
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let evalEqual;
  
  eqObjects(actual, expected) ? evalEqual = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    : evalEqual = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;

  console.log(evalEqual);
};


// TEST CASES
assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 2}); // => pass
assertObjectsEqual({b: 2, a: 1}, {a: 1, b: 2}); // => pass
assertObjectsEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3}); // => pass
assertObjectsEqual({a: [1], b: [2, 3]}, {a: [1], b: [2, 3]}); // => pass

console.log("-------------------------------------");
assertObjectsEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2}); // => fail
assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 3}); // => fail
assertObjectsEqual({a: 1, d: 2}, {e: 1, b: 2}); // => fail
assertObjectsEqual({b: 2, a: "1"}, {a: 1, b: 2}); // => fail
assertObjectsEqual({a: [1], b: [2, 3]}, {a: [1], b: [2]}); // => fail