const assertArrayEquals = require('../assertArrayEquals');


assertArrayEquals([1, 2, 3], [1, 2, 3]);

assertArrayEquals([1, 2, 3], [3, 2, 1]);  //fail

assertArrayEquals([], []);

assertArrayEquals([1, '2', 3], [1, 2, 3]);   //fail