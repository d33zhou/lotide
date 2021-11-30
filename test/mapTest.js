const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  it("should return an array of first letters from the array of strings", () => {
    const array = ["ground", "control", "to", "major", "tom"];
    const callback = arr => arr[0];
    const expectedOutput = ["g", "c", "t", "m", "t"];
    assert.deepEqual(map(array, callback),expectedOutput);
  });

  it("should return an array of numbers multiplied by 2", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const callback = num => num * 2;
    const expectedOutput = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    assert.deepEqual(map(array, callback),expectedOutput);
  });

  it("should return an empty array if no parameters given", () => {
    const expectedOutput = [];
    assert.deepEqual(map(),expectedOutput);
  });

  it("should return an empty array if an empty array given", () => {
    const array = [];
    const callback = arr => array[0];
    const expectedOutput = [];
    assert.deepEqual(map(array, callback),expectedOutput);
  });

  it("should return the same array if no callback given", () => {
    const array = [1, 2, 3];
    const expectedOutput = [1, 2, 3];
    assert.deepEqual(map(array),expectedOutput);
  });
});