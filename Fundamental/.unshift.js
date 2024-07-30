/*
.unshift adds one or more items to the beginning of an array and returns the new length of the array.
*/

let fruits = ['banana', 'cherry'];
let newLength = fruits.unshift('apple', 'mango');

console.log(newLength); // Output: 4
console.log(fruits);    // Output: ['apple', 'mango', 'banana', 'cherry']
