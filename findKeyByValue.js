const assertEqual = function(actual, expected) {
  if (actual !== expected)
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed:  ${actual}  ===  ${expected}`);

};

const findKeyByValue = function(inputObject, value) {
  let result = "";
  
  for (let key in inputObject) {
    if (inputObject[key] === value) {
      result = key;
      return result;
    }
  }
  if (result === "") //although this condition would not be needed, simply return would suffice
    return;

};


const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);