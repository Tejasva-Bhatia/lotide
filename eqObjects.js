const assertEqual = function(actual, expected) {
  if (actual !== expected)
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  if (actual === expected)
    return console.log(`✅✅✅ Assertion Passed:  ${actual}  ===  ${expected}`);

};

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


module.exports = eqObjects;


// //Test Conditions
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

//Test Conditions
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
let result1 = eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
let result2 = eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject);

console.log(result1);
console.log(result2);