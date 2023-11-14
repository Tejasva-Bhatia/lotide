const assertEqual = function(actual, expected) {
  if (actual !== expected)
    return console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  if (actual === expected)
    return console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Bhatia", "Tejasva");
assertEqual("Tejasva", "Tejasva");
assertEqual(4, 4);
assertEqual(6, 5);