const assertArrayEqual = require('../assertArrayEqual');


assertArrayEqual([1, 2, 3], [1, 2, 3]);

assertArrayEqual([1, 2, 3], [3, 2, 1]);  //fail

assertArrayEqual([], []);

assertArrayEqual([1, '2', 3], [1, 2, 3]);   //fail