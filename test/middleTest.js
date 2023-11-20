//const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [] for an empty array", () => {
    assert.deepEqual(middle([]), []);
  });

  it("returns [] for an array with one element", () => {
    assert.deepEqual(middle([42]), []);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});






// assertArraysEqual(middle([0, 1, 2, 3, 4, 5]), [2, 3]);

// assertArraysEqual(middle([42]), []);

// assertArraysEqual(middle([42, 43]), []);

// assertArraysEqual(middle([42, 43, 44]), [43]);

// assertArraysEqual(middle(['a', 'b', 'c', 'd']), ['b', 'c']);