// create function tail (every element in array except the first element), return as a new array
const tail = function(input) {
  let arr = [];

  arr = input.slice(1);

  return arr;
};

module.exports = tail;