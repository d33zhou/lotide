const assertEqual = function(actual, expected) {
  let evalEqual;
  
  actual === expected ? evalEqual = `✅✅✅ Assertion Passed: ${actual} === ${expected}` : evalEqual = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  console.log(evalEqual);
};

// take object and value, scan object, return first key that === value, otherwise undefined
const findKeyByValue = function(scanObj, findStr) {
  let keyMatch;

  for (const scan in scanObj) {
    scanObj[scan] === findStr ? keyMatch = scan : "";
  }

  return keyMatch;
};


// TEST CASES
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Simpsons"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");