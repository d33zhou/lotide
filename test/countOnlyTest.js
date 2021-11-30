const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it("should return an object with the string occurrences of each key to be counted, not including false keys or strings not included in the object of items to count", () => {
    const arrayOfStrings = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const itemsToCount = {
      "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false
    };
    const expectedOutput = {
      "Jason": 1,
      "Fang": 2,
    };
    assert.deepEqual(countOnly(arrayOfStrings, itemsToCount), expectedOutput)
  });

  it("should return an empty object if an empty array is provided", () => {
    const arrayOfStrings = [];
    const itemsToCount = {
      "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false
    };
    const expectedOutput = {};
    assert.deepEqual(countOnly(arrayOfStrings, itemsToCount), expectedOutput)
  });

  it("should return an empty object if an empty object is provided", () => {
    const arrayOfStrings = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const itemsToCount = {};
    const expectedOutput = {};
    assert.deepEqual(countOnly(arrayOfStrings, itemsToCount), expectedOutput)
  });
});