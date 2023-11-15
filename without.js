
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




const without = function(source, itemsToRemove) {
  const finalResult = [];
  for (let i = 0; i < source.length; i++) {
    if (!(itemsToRemove.includes(source[i])))
      finalResult.push(source[i]);
  }

  return finalResult;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArrayEqual(without([1, 2, 3], [1]), [2,3]);
assertArrayEqual(words, ["hello", "world", "lighthouse"]);