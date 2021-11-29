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

* `head(array1)`: returns the value of the first element of an array.
* `tail(array1)`: returns a new array containing all elements excluding the first element of an array.
* `middle(array1)`: returns a new array that includes the middle element (for odd-length arrays) or middle two elements (for even-length arrays), or an empty array if the array length is 2 or less.
* `eqArrays(array1, array2)`: returns true if two arrays are exactly equal, otherwise returns false.
* `assertEqual(actual value, expected value)`: logs to console true if the actual result is equal to the expected result, otherwise logs false.
* `assertArraysEqual(actual array, expected array)`: logs to console true if the actual result array is equal to the expected array, otherwise logs false.