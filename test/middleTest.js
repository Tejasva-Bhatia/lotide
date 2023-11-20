const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


assertArraysEqual(middle([0, 1, 2, 3, 4, 5]), [2, 3]);

assertArraysEqual(middle([42]), []);

assertArraysEqual(middle([42, 43]), []);

assertArraysEqual(middle([42, 43, 44]), [43]);

assertArraysEqual(middle(['a', 'b', 'c', 'd']), ['b', 'c']);