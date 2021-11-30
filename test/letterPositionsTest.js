const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("should return an object with arrays of indices for letter occurrences for each letter(key)", () => {
    const actualInput = "hello";
    const expectedOutput = {
      h: [0],
      e: [1],
      l: [2, 3],
      o: [4],
    };
    assert.deepEqual(letterPositions(actualInput), expectedOutput);
  });

  it("should return an empty object if no string given", () => {
    const expectedOutput = {};
    assert.deepEqual(letterPositions(), expectedOutput);
  });
});