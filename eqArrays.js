const assertEqual = function(actual, expected) {
  if (actual !== expected)
    return false;
  if (actual === expected)
    return true;

};

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (!assertEqual(arr1[i], arr2[i])) {
      return false;
    }
  }
  return true;
};

console.log(assertEqual(eqArrays([1, 2, 3], [1, 3, 3]), true));  //returns false

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));   //returns true