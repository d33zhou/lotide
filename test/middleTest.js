const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("should return an empty array if array has 1 element", () => {
    assert.deepEqual(middle([1]), []);
  });
  
  it("should return an empty array if array has 2 elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("should return [2] for array [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("should return [3] for array [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("should return [2, 3] for array [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("should return [3, 4] for array [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});