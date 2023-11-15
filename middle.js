const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArrayEqual = function(actual, expected) {
  if (!(eqArrays(actual, expected)))
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  if (eqArrays(actual, expected))
    console.log(`✅✅✅ Assertion Passed:  ${actual}  ===  ${expected}`);

};

// ACTUAL FUNCTION
const middle = function(array) {
  //...
  let middleElement = [];
  let l = array.length;
  if (l <= 2) {
    //do nothing
  }
  if (l % 2 === 1)
    middleElement.push(array[Math.floor(l / 2)]);

  else {
    middleElement.push(array[(l / 2) - 1]);
    middleElement.push(array[(l / 2)]);
  }
  return middleElement;
};

assertArrayEqual(middle([0, 1, 2, 3, 4, 5]), [2, 3]);

