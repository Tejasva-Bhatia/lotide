const assertEqual = function(actual, expected) {
  if (actual !== expected)
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed:  ${actual}  ===  ${expected}`);

};

const countLetters = function(inputString) {
  let result = {};
  for (let i = 0; i < inputString.length; i++) {
    let currentLetter = inputString[i];
    if (result[currentLetter])
      result[currentLetter]++;
    
    else
      result[currentLetter] = 1;
  }
  return result;
};

module.exports = assertEqual;

const result = countLetters('LHL');
console.log(result);
assertEqual(result['L'],2);
assertEqual(result['H'],1);