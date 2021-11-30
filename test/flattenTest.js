const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("should return [1, 2, 3, 4, 5, 6] given a nested array", () => {
    const actualInput = [1, 2, [3, 4], 5, [6]];
    const expectedOutput = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(flatten(actualInput), expectedOutput);
  });

  it("should return [1, 2, 3, 4, 5, 6] given a nested array", () => {
    const actualInput = [[1, 2], [3, 4], 5, [6]];
    const expectedOutput = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(flatten(actualInput), expectedOutput);
  });

  it("should return [1, 2, 3, 4, 5, 6] given a non-nested array", () => {
    const actualInput = [1, 2, 3, 4, 5, 6];
    const expectedOutput = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(flatten(actualInput), expectedOutput);
  });
  
  it("should return [6, 5, 4, 3, 2, 1] given a nested array", () => {
    const actualInput = [[6, 5, 4, 3, 2], [1]];
    const expectedOutput = [6, 5, 4, 3, 2, 1];
    assert.deepEqual(flatten(actualInput), expectedOutput);
  });
});