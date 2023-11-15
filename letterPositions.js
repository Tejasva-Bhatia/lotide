
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


const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    let currentLetter = sentence[i];
    if (results[currentLetter])
      results[currentLetter].push(i);
    else
      results[currentLetter] = [i];
  }
  return results;
};

const check = letterPositions("Apple");
assertArrayEqual(check['p'], [1, 2]);
assertArrayEqual(check['p'], [1, 3]);

