// take an array, and add each element from the beginning into a new array until the callback function evaluates to true, then return the new array.
const takeUntil = function(array, callback) {
  const results = [];

  for (const element of array) {
    if (!callback(element)) {
      results.push(element);
    } else {
      return results;
    }
  }

  return results;
};

module.exports = takeUntil;