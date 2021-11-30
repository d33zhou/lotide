// take object and value, scan object, return first key that === value, otherwise undefined
const findKeyByValue = function(scanObj, findStr) {
  let keyMatch;

  for (const scan in scanObj) {
    scanObj[scan] === findStr ? keyMatch = scan : "";
  }

  return keyMatch;
};

module.exports = findKeyByValue;