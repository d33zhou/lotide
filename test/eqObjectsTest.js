const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("should return true if objects have same key-value pairs", () => {
    const object1 = { a: "1", b: "2" };
    const object2 = { b: "2", a: "1" };
    assert.isTrue(eqObjects(object1, object2));
  });

  it("should return true if objects have same key-value pairs, with an array value", () => {
    const object1 = { c: "1", d: ["2", 3] };
    const object2 = { d: ["2", 3], c: "1" };
    assert.isTrue(eqObjects(object1, object2));
  });

  it("should return false if objects have different key-value pairs", () => {
    const object1 = { a: "1", b: "2" };
    const object2 = { a: "1", b: "2", c: "3" };
    assert.isFalse(eqObjects(object1, object2));
  });

  it("should return false if objects have different key-value pairs within the array values only", () => {
    const object1 = { c: "1", d: ["2", 3] };
    const object2 = { c: "1", d: ["2", 3, 4] };
    assert.isFalse(eqObjects(object1, object2));
  });

  it("should return true if nested objects have same key-value pairs", () => {
    const object1 = { a: { z: 1 }, b: 2 };
    const object2 = { a: { z: 1 }, b: 2 };
    assert.isTrue(eqObjects(object1, object2));
  });

  it("should return true if nested objects have same key-value pairs (multiple keys in nested object)", () => {
    const object1 = { a: { y: 0, z: 1 }, b: 2 };
    const object2 = { a: { y: 0, z: 1 }, b: 2 };
    assert.isTrue(eqObjects(object1, object2));
  });

  it("should return true if nested objects have same key-value pairs (4 layers of nesting)", () => {
    const object1 = { a: { b: { c: { d: 1}}}, b: 2 };
    const object2 = { a: { b: { c: { d: 1}}}, b: 2 };
    assert.isTrue(eqObjects(object1, object2));
  });

  it("should return false if nested objects have different key-value pairs", () => {
    const object1 = { a: { y: 0, z: 1 }, b: 2 };
    const object2 = { a: { z: 1 }, b: 2 };
    assert.isFalse(eqObjects(object1, object2));
  });

  it("should return false if nested objects have different key-value pairs (4 layers of nesting)", () => {
    const object1 = { a: { b: { c: { d: 1}}}, b: 2 };
    const object2 = { a: { b: { c: { d: 2}}}, b: 2 };
    assert.isFalse(eqObjects(object1, object2));
  });
});