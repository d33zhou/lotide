const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {  // if objs have same # keys
    for (const key in object1) {                                      // for each key
      if (Array.isArray(object1[key])) {                              // if key is array
        if (!eqArrays(object1[key], object2[key])) {                  // check arrays equal
          return false;
        }
      } else if (typeof object1[key] === "object" && object1[key] !== null) { // check if obj
        if (!eqObjects(object1[key], object2[key])) {                 // if obj, use recursion
          return false;
        }
      } else {                                                        // assumes primitive type
        if (object1[key] !== object2[key]) {                          // check key values equal
          return false;
        }
      }
    }
  } else {
    return false;
  }

  return true;
};

module.exports = eqObjects;