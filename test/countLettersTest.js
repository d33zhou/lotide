const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("should return an object with the count of each letter (not including spaces) for string 'This is a string!! '", () => {
    const actualInput = 'This string!! ';
    const expectedOutput = {
      T: 1,
      h: 1,
      i: 2,
      s: 2,
      t: 1,
      r: 1,
      n: 1,
      g: 1,
      '!': 2,
    }
    assert.deepEqual(countLetters(actualInput), expectedOutput);
  });

  it("should return an empty object if no string given", () => {
    const actualInput = '';
    const expectedOutput = {};
    assert.deepEqual(countLetters(actualInput), expectedOutput);
  });

  it("should not return an object with space as a key", () => {
    const actualInput = ' ';
    const expectedOutput = {};
    assert.deepEqual(countLetters(actualInput), expectedOutput);
  });
});