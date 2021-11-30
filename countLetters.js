// returns an object with the number of occurrences of each letter in a string, not including spaces. Case sensitive.
const countLetters = function(sentence) {
  const letters = {};

  for (const letter of sentence) {
    letters[letter] && letter !== " " ? letters[letter]++
      : letter !== " " ? letters[letter] = 1 : "";
  }
  
  return letters;
};

module.exports = countLetters;