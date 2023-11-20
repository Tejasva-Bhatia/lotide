const assertEqual = function(actual, expected) {
  if (actual !== expected)
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed:  ${actual}  ===  ${expected}`);

};
/*-------Ai-------feedback for O(n) complexity---------
const countOnly = function(allItems, itemsToCount) {
  let resultObject = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      resultObject[item] ? resultObject[item]++ : resultObject[item] = 1;
    }
  }
  return resultObject;
};



*/







// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let resultObject = {};
  for (const key in itemsToCount) {
    if (itemsToCount[key] === true) {
      let count = 0;
      for (let i = 0; i < allItems.length; i++) {
        if (key === allItems[i]) {
          count++;
        }
      }
      if (count > 0)
        resultObject[key] = count;
    }
  }
  return resultObject;
};

module.exports = countOnly;


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
