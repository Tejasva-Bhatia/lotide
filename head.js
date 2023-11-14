const assertEqual = function(actual, expected) {
  if (actual !== expected)
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  if (actual === expected)
    return console.log(`✅✅✅ Assertion Passed:  ${actual}  ===  ${expected}`);

};

const head = function(arr) {
  const firstElement = arr[0];
  return firstElement;
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");