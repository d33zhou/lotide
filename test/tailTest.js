const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("should return 2 elements for an array of 3 elements", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });
  
  it("should return 'Lighthouse' for the first element of the returned array", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[0], 'Lighthouse');
  });

  it("should return 'Labs' for the second element of the returned array", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[1], 'Labs');
  });

  it("should return 0 elements for an array of no elements", () => {
    assert.strictEqual(tail([]).length, 0);
  });

  it("should return undefined for an array of no elements", () => {
    assert.strictEqual(tail([])[0], undefined);
  });

  it("should return [2, 3] for an array [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
});