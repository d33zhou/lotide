const assertEqual = function(actual, expected) {
  let evalEqual;
  
  actual === expected ? evalEqual = `✅✅✅ Assertion Passed: ${actual} === ${expected}` : evalEqual = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  console.log(evalEqual);
};

const findKey = function (object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return;
};


const findKeyByValue = function(scanObj, findStr) {
  let keyMatch;

  for (const scan in scanObj) {
    scanObj[scan] === findStr ? keyMatch = scan : "";
  }

  return keyMatch;
};

// TEST CASES
const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
assertEqual(result1, "noma");

const result2 = findKey({
  one: 1,
  two: 2,
  three: 3
}, x => x % 2 === 0); // => two
assertEqual(result2, "two");

const result3 = findKey({
  one: 1,
  two: 2,
  three: 3
}, x => x === 7); // => undefined
assertEqual(result3, undefined);

assertEqual(findKey(), undefined); // => undefined