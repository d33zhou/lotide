const assertEqual = require('../assertEqual');
const tail = require('../tail');

let result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

result = tail([]);
assertEqual(result.length, 0);
assertEqual(result[0], undefined);
assertEqual(result[1], undefined);