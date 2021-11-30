const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  it("should return [1, 2, 5, 7, 2] given an array and callback", () => {
    const array = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const callback = x => x < 0;
    const expectedOutput = [1, 2, 5, 7, 2];
    assert.deepEqual(takeUntil(array, callback), expectedOutput);
  });

  it("should return string array up to Hollywood given an array and callback", () => {
    const array = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const callback = x => x === ',';
    const expectedOutput = ["I've", "been", "to", "Hollywood"];
    assert.deepEqual(takeUntil(array, callback), expectedOutput);
  });
});