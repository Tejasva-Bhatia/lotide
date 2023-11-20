const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [2,3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2,3]);
  });
  it("returns [] for an empty array", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns [] for an array with one element", () => {
    assert.deepEqual(tail([42]), []);
  });

  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it("returns ['b', 'c'] for ['a', 'b', 'c']", () => {
    assert.deepEqual(tail(['a', 'b', 'c']), ['b', 'c']);
  });
 
});
