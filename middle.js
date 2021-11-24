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

// return middle 2 elements of array (will return 2 elements if even length array, otherwise 1)
const middle = function(arr) {
  let mid = [];

  if (arr.length > 2) {
    arr.length % 2 === 0 ? mid = arr.slice(arr.length / 2 - 1, arr.length / 2 + 1) : mid.push(arr[Math.floor(arr.length / 2)]);
  }
  
  return mid;
};


// TEST CASES
assertArraysEqual(middle([1]), []); // => true
assertArraysEqual(middle([1, 2]), []); // => true

assertArraysEqual(middle([1, 2, 3]), [2]); // => true
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => true

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => true
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => true