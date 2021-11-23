const assertEqual = function(actual, expected) {
  let evalEqual;
  
  actual === expected ? evalEqual = `✅✅✅ Assertion Passed: ${actual} === ${expected}` : evalEqual = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  console.log(evalEqual);
};


// create function tail (every element in array except the first element), return as a new array
let tail = function(input) {
  let arr = [];

  arr = input.slice(1);

  return arr;
};

//TEST CASES
let result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

result = tail([]);
assertEqual(result.length, 0);
assertEqual(result[0], undefined);
assertEqual(result[1], undefined);