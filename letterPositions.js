// take a string and return an object with values of keys as arrays of each indice that each specific letter (key) appears.
const letterPositions = function(sentence) {
  const results = {};
  
  if (sentence) {
    for (let i = 0; i < sentence.length; i++) {
      results[sentence[i]] && sentence[i] !== " "
      ? results[sentence[i]].push(i) :
      sentence[i] !== " " ? results[sentence[i]] = [i] : "";
    }
  }
    
  return results;
};

module.exports = letterPositions;