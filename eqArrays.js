const assertEqual = function(actual, expected) {
  let evalEqual;
  
  actual === expected ? evalEqual = `✅✅✅ Assertion Passed: ${actual} === ${expected}` : evalEqual = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  console.log(evalEqual);
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i])) {
        if (!eqArrays(arr1[i], arr2[i])) {
          return false;
        }
      } else {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
    }
  } else {
    return false;
  }

  return true;
};


// TEST CASES
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

// RECURSION TEST CASES
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true)
assertEqual(eqArrays([[[[[[1]]]]]], [[[[[[1]]]]]]), true)
assertEqual(eqArrays([1, [2, [3, [4]]]], [1, [2, [3, [4]]]]), true)

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false)
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false)
assertEqual(eqArrays([[[[[[1]]]]]], [[[[[[2]]]]]]), false)