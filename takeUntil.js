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
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  if (eqArrays(array1, array2))
    console.log(`✅✅✅ Assertion Passed:  ${array1}  ===  ${array2}`);

};


const takeUntil = function(array, callback) {
  let ans = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      break; //
    }
    ans.push(array[i]);
  }
  return ans;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArrayEqual(results1, [1, 2, 5, 7, 2]);