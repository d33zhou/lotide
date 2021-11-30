const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("should return [2, 3] given array and itemsToRemove array", () => {
    const array1 = [1, 2, 3];
    const array2 = [1];
    const expectedOutput = [2, 3];
    assert.deepEqual(without(array1, array2), expectedOutput);
  });

  it("should return ['1', '2'] given array and itemsToRemove array", () => {
    const array1 = ["1", "2", "3"];
    const array2 = [1, 2, "3"];
    const expectedOutput = ["1", "2"];
    assert.deepEqual(without(array1, array2), expectedOutput);
  });

  it("should return the same array if no itemsToRemove array", () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [];
    const expectedOutput = [1, 2, 3, 4];
    assert.deepEqual(without(array1, array2), expectedOutput);
  });

  it("should return empty array if all items to be removed", () => {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 3];
    const expectedOutput = [];
    assert.deepEqual(without(array1, array2), expectedOutput);
  });
});