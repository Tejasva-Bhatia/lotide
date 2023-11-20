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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;





const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArrayEqual(results1, ['g','c','t','m','t']);

const animalNames = ["cat", "dog", "cow", "deer", "tiger"];
const results2 = map(animalNames, word => word[0]);
assertArrayEqual(results2, ['c','d','c','d','t']);

const fruitNames = ["mango", "banana", "pineapple", "kiwi", "apple"];
const results3 = map(fruitNames, word => word[0]);
assertArrayEqual(results3, ['m','b','p','k','a']);