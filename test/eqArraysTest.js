const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("should return true if two identical number arrays are given", () => {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 3];
    assert.isTrue(eqArrays(array1, array2));
  });

  it("should return true if two identical string arrays are given", () => {
    const array1 = ["1", "2", "3"];
    const array2 = ["1", "2", "3"];
    assert.isTrue(eqArrays(array1, array2));
  });

  it("should return true if two identical nested arrays are given (1 layer of nesting)", () => {
    const array1 = [[2, 3], [4]];
    const array2 = [[2, 3], [4]];
    assert.isTrue(eqArrays(array1, array2));
  });

  it("should return true if two identical nested arrays are given (4 layers of nesting)", () => {
    const array1 = [1, [2, [3, [4]]]];
    const array2 = [1, [2, [3, [4]]]];
    assert.isTrue(eqArrays(array1, array2));
  });

  it("should return true if two identical nested arrays are given (many layers of nesting)", () => {
    const array1 = [[[[[[1]]]]]];
    const array2 = [[[[[[1]]]]]];
    assert.isTrue(eqArrays(array1, array2));
  });
});