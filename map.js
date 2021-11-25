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

const assertArraysEqual = function(actual, expected) {
  let evalEqual;
  
  eqArrays(actual, expected) ? evalEqual = `✅✅✅ Assertion Passed: ${actual} === ${expected}` : evalEqual = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  console.log(evalEqual);
};

// take array to map and a callback function, return a new array based on callback results
const map = function(array, callback) {
  const results = [];

  if (array && callback) {
    for (let item of array) {
      results.push(callback(item));
    }
  }

  return array && !callback ? array : results;
};


// TEST CASES
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const results2 = map(numbers, num => num * 2);
assertArraysEqual(results2, [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);

assertArraysEqual(map(), []);
assertArraysEqual(map([1, 2, 3]), [1, 2, 3]);
assertArraysEqual(map([]), []);