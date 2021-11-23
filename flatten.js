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

// take array, elements may be nested arrays (only up to 1 level), and return a flat (no nested) array
const flatten = function(arr) {
  let flat = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) { // element is an array
      for (let element of arr[i]) { // loop and push all elements of nested array
        flat.push(element);
      }
    } else { // element is not an array
      flat.push(arr[i]);
    }
  }

  return flat;
};

// TEST CASES
console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
console.log(flatten([[1, 2], [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, 3, 4, 5, 6])) // => [1, 2, 3, 4, 5, 6]
console.log(flatten([[6, 5, 4, 3, 2], [1]])) // => [6, 5, 4, 3, 2, 1]