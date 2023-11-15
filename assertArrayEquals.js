
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

const assertArrayEqual = function(array1, array2) {
  if (!(eqArrays(array1, array2)))
    return console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  if (eqArrays(array1, array2))
    return console.log(`✅✅✅ Assertion Passed:  ${array1}  ===  ${array2}`);

};



