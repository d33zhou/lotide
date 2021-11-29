const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); //true
assertArraysEqual([1, 2, 3], [1, 2, 4]); //false
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); //false
assertArraysEqual([], []); //true
assertArraysEqual([1], []); //false
assertArraysEqual([], [1]); //false
assertArraysEqual(["1"], [1]); //false