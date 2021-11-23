// compare two arrays, return true if the same, else false
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

// output to console if the actual array is the same as the expected array or not
const assertArraysEqual = function(actual, expected) {
  let evalEqual;
  
  eqArrays(actual, expected) ? evalEqual = `✅✅✅ Assertion Passed: ${actual} === ${expected}` : evalEqual = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  console.log(evalEqual);
};

// return a subset array of the source array, excluding any items included in the itemsToRemove array
const without = function(source, itemsToRemove) {
  let output = [];

  for (let num of source) {
    let toRemove = false;
    for (let item of itemsToRemove) {
      num === item ? toRemove = true : "";
    }
    !toRemove ? output.push(num) : "";
  }

  return output;
};


// TEST CASES
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
console.log(without([1, 2, 3, 4], [])); // => [1, 2, 3, 4]
console.log(without([1, 2, 3], [1, 2, 3])); // => []

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);