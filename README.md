# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @d33zhou/lotide`

**Require it:**

`const _ = require('@d33zhou/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual array, expected array)`: logs to console true if the actual result array is equal to the expected array, otherwise logs false.
* `assertEqual(actual value, expected value)`: logs to console true if the actual result is equal to the expected result, otherwise logs false.
* `assertObjectsEqual(actual object, expected object)`: logs to console true if the actual result object is equal to the expected object, otherwise logs false.
* `countLetters(string)`: returns an object with the number of occurrences of each letter in a string, not including spaces. Case sensitive.
* `countOnly(array of strings, object of items to count)`: takes an array of strings and an object specifying what keys to count (true/false), and returns an object with the occurrences of each key to be counted. Returned object will not include keys not specified to be counted. Will return an empty object given an empty array or object.
* `eqArrays(array1, array2)`: returns true if two arrays are exactly equal, otherwise returns false.
* `eqObjects(object1, object2)`: Returns true if both objects have identical keys with identical values, otherwise returns false.
* `findKey(object, callback)`: Takes an object and callback, returns the first key for which the callback returns a truthy value. If no such key found, returns undefined.
* `findKeyByValue(object, string)`: Take object and value and return the first key where the value matches the given string, otherwise return undefined.
* `flatten(array)`: takes an array, of which elements may be nested arrays (only up to 1 level), and returns a flat (no nesting) array.
* `head(array1)`: returns the value of the first element of an array.
* `letterPositions(sentence)`: Take a string and return an object with values of keys as arrays of each indice that each specific letter (key) appears. Returns an empty object if no string provided.
* `map(array, callback)`: Take an array to map and a callback function, and return a new array based on callback results.
* `middle(array1)`: returns a new array that includes the middle element (for odd-length arrays) or middle two elements (for even-length arrays), or an empty array if the array length is 2 or less.
* `tail(array1)`: returns a new array containing all elements excluding the first element of an array.
* `takeUntil(array, callback)`: Take an array, and add each element from the beginning into a new array until the callback function evaluates to true, then return the new array.
* `without(array1, array2)`: Returns a subset array of the source array (array1), excluding any items included in the itemsToRemove array (array2).