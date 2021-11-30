// take an array to map and a callback function, and return a new array based on callback results
const map = function(array, callback) {
  const results = [];

  if (array && callback) {
    for (let item of array) {
      results.push(callback(item));
    }
  }

  return array && !callback ? array : results;
};

module.exports = map;