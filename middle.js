// return middle 2 elements of array (will return 2 elements if even length array, otherwise 1)
const middle = function(arr) {
  let mid = [];

  if (arr.length > 2) {
    arr.length % 2 === 0 ? mid = arr.slice(arr.length / 2 - 1, arr.length / 2 + 1) : mid.push(arr[Math.floor(arr.length / 2)]);
  }
  
  return mid;
};

module.exports = middle;