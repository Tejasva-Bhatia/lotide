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

const eqObjects = function(object1, object2) {
  let objKeys1 = Object.keys(object1);
  let objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length)
    return false;

  for (let i = 0; i < objKeys1.length; i++) {
    let key = objKeys1[i];
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // If the values are arrays, use eqArrays to compare them
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }
    } else {
      // If the values are not arrays, compare them directly
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected) === true)
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)}  ===  ${inspect(expected)}`);
  else
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;
//Test Conditions
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

assertObjectsEqual(multiColorShirtObject,anotherMultiColorShirtObject);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

assertObjectsEqual(multiColorShirtObject,longSleeveMultiColorShirtObject);