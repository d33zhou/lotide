// Take an object and callback, return the first key for which the callback returns a truthy value.
// If no such key found, return undefined.
const findKey = function (object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return;
};

module.exports = findKey;