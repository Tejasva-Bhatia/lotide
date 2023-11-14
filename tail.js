const assertEqual = function(actual, expected) {
  if (actual !== expected)
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  if (actual === expected)
    return console.log(`✅✅✅ Assertion Passed:  ${actual}  ===  ${expected}`);

};

const tail = function(arr) {
  const newArray = arr.slice(1);
  return newArray;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);