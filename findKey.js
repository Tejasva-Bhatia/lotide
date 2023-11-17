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
  else {
    console.log(`✅✅✅ Assertion Passed:  ${array1}  ===  ${array2}`);
  }
};

const findKey = function(object, callback) {
  let ansKey = "";
  for (const item in object) {
    if (callback(object[item])) {
      ansKey += item;
      break;
    }
  }
  return ansKey;
};

let result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertArrayEqual(result1,"noma");

let result2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 3); // => "noma"

assertArrayEqual(result2,"Akaleri");