const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("should return 'drama' given a specific object and search value string", () => {
    const object = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const search = "The Wire";
    const expectedOutput = "drama";
    assert.strictEqual(findKeyByValue(object, search), expectedOutput);
  });

  it("should return 'drama' given a specific object and search value string", () => {
    const object = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const search = "Brooklyn Nine-Nine";
    const expectedOutput = "comedy";
    assert.strictEqual(findKeyByValue(object, search), expectedOutput);
  });

  it("should return 'drama' given a specific object and search value string", () => {
    const object = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const search = "The Expanse";
    const expectedOutput = "sci_fi";
    assert.strictEqual(findKeyByValue(object, search), expectedOutput);
  });

  it("should return undefined given a specific object and search value string that is not in the object", () => {
    const object = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const search = "The Simpsons";
    const expectedOutput = undefined;
    assert.strictEqual(findKeyByValue(object, search), expectedOutput);
  });
});