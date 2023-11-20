
const assertArraysEqual = require('./assertArraysEqual');

// ACTUAL FUNCTION
const middle = function (array) {
  //...
  let middleElement = [];
  let l = array.length;
  if (l <= 2) {
    //do nothing
    return middleElement;
  }
  if (l % 2 === 1) {
    middleElement.push(array[Math.floor(l / 2)]);
  } else {
    middleElement.push(array[(l / 2) - 1]);
    middleElement.push(array[(l / 2)]);
  }
  return middleElement;
};

module.exports = middle;

