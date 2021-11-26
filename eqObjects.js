const assertEqual = function(actual, expected) {
  let evalEqual;
  
  actual === expected ? evalEqual = `✅✅✅ Assertion Passed: ${actual} === ${expected}` : evalEqual = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  console.log(evalEqual);
};

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

// Returns true if both objects have identical keys with identical values.
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {  // if objs have same # keys
    for (const key in object1) {                                      // for each key
      if (Array.isArray(object1[key])) {                              // if key is array
        if (!eqArrays(object1[key], object2[key])) {                  // check arrays equal
          return false;
        }
      } else if (typeof object1[key] === "object" && object1[key] !== null) { // check if obj
        if (!eqObjects(object1[key], object2[key])) {                 // if obj, use recursion
          return false;
        }
      } else {                                                        // assumes primitive type
        if (object1[key] !== object2[key]) {                          // check key values equal
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
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

// RECURSION TEST CASES
console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { y: 0, z: 1 }, b: 2 })); // => true
console.log(eqObjects({ a: { b: { c: { d: 1}}}, b: 2 }, { a: { b: { c: { d: 1}}}, b: 2 })); // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false
console.log(eqObjects({ a: { b: { c: { d: 1}}}, b: 2 }, { a: { b: { c: { d: 2}}}, b: 2 })); // => false