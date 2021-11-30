// take an array of strings and an object specifying what keys to count (true/false)
// returns an object with the occurrences of each key to be counted
// returned object will not include keys not specified to be counted.
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    results[item] && itemsToCount[item] ? results[item]++
      : (itemsToCount[item] ? results[item] = 1 : "");
  }

  return results;
};

module.exports = countOnly;