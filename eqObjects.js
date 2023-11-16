const assertEqual = function(actual, expected) {
  if (actual !== expected)
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  if (actual === expected)
    return console.log(`✅✅✅ Assertion Passed:  ${actual}  ===  ${expected}`);

};

const eqObjects = function(object1, object2) {
  let objKeys1 = Object.keys(object1);
  let objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length)
    return false;

  for (let i = 0; i < objKeys1.length; i++) {
    let key = objKeys1[i];
    if (object1[key] !== object2[key])
      return false;
  }
  return true;
};





//Test Conditions
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);