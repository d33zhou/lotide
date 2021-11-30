const assertObjectsEqual = require('../assertObjectsEqual');

assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 2}); // => pass
assertObjectsEqual({b: 2, a: 1}, {a: 1, b: 2}); // => pass
assertObjectsEqual({a: [1], b: [2, 3]}, {a: [1], b: [2, 3]}); // => pass

console.log("-------------------------------------");
assertObjectsEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2}); // => fail
assertObjectsEqual({a: 1, d: 2}, {e: 1, b: 2}); // => fail
assertObjectsEqual({b: 2, a: "1"}, {a: 1, b: 2}); // => fail
assertObjectsEqual({a: [1], b: [2, 3]}, {a: [1], b: [2]}); // => fail