// return a subset array of the source array, excluding any items included in the itemsToRemove array
const without = function(source, itemsToRemove) {
  let output = [];

  for (let num of source) {
    let toRemove = false;
    for (let item of itemsToRemove) {
      num === item ? toRemove = true : "";
    }
    !toRemove ? output.push(num) : "";
  }

  return output;
};

module.exports = without;