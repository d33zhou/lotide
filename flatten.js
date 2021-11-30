// take array, elements may be nested arrays (only up to 1 level), and return a flat (no nested) array
const flatten = function(arr) {
  let flat = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) { // element is an array
      for (let element of arr[i]) { // loop and push all elements of nested array
        flat.push(element);
      }
    } else { // element is not an array
      flat.push(arr[i]);
    }
  }

  return flat;
};

module.exports = flatten;