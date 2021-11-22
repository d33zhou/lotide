// create our own console.assert() function
// writes error msg to console if assertion false, otherwise nothing

const assertEqual = function(actual, expected) {
  let evalEqual = "";
  
  actual === expected ? evalEqual += "✅✅✅ Assertion Passed: " + actual + " === " + expected : evalEqual += "🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected;

  console.log(evalEqual);
};


//TEST CASES
/*
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

assertEqual("Labs", "Labs");
assertEqual(1, 2);
*/