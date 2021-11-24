const assertEqual = function(actual, expected) {
  let evalEqual;
  
  actual === expected ? evalEqual = `✅✅✅ Assertion Passed: ${actual} === ${expected}` : evalEqual = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  console.log(evalEqual);
};

const countLetters = function(sentence) {
  const letters = {};

  for (const letter of sentence) {
    letters[letter] && letter !== " " ? letters[letter]++ : letter !== " " ? letters[letter] = 1 : "";
  }
  
  return letters;
};


// TEST CASES
let result1 = countLetters("This is a string!! ");
assertEqual(result1["T"], 1);
assertEqual(result1["t"], 1);
assertEqual(result1["q"], undefined);
assertEqual(result1["i"], 3);
assertEqual(result1[" "], undefined);