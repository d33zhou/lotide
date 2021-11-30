const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  it("should return 'noma' given a specific object and callback function", () => {
    const object = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const callback = x => x.stars === 2;
    const expectedOutput = "noma";
    assert.strictEqual(findKey(object, callback), expectedOutput);
  });

  it("should return 'two' given a specific object and callback function", () => {
    const object = {
      one: 1,
      two: 2,
      three: 3
    };
    const callback = x => x % 2 === 0;
    const expectedOutput = "two";
    assert.strictEqual(findKey(object, callback), expectedOutput);
  });

  it("should return undefined given a specific object and callback function, where the callback is never true", () => {
    const object = {
      one: 1,
      two: 2,
      three: 3
    };
    const callback = x => x === 7;
    const expectedOutput = undefined;
    assert.strictEqual(findKey(object, callback), expectedOutput);
  });

  it("should return undefined where no parameters are given", () => {
    const expectedOutput = undefined;
    assert.strictEqual(findKey(), expectedOutput);
  });
});