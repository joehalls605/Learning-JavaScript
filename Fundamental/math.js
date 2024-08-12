/* 
The Math object in JavaScript provides properties and methods for mathematical constants and functions. 
All Math methods are static, meaning you call them directly on the Math object without creating an instance.
*/

// Math.random() generates a floating-point number between 0 (inclusive) and 1 (exclusive)
let randomNum = Math.random();
console.log(randomNum);

// Generate a random number between 1 (inclusive) and 10 (inclusive)
let min = 1;
let max = 10;
let randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInRange);

// Math.floor() rounds a number down to the nearest integer
let num = 7.8;
let floorNum = Math.floor(num);

// Math.ceil() rounds a number up to the nearest integer
let ceiledNum = Math.ceil(num);

// Math.round() rounds a number to the nearest integer
let roundedNum = Math.round(num);

// Math.max() returns the largest number from a set of numbers
let maxNum = Math.max(10, 20, 30, 40);

// Math.min() returns the smallest number from a set of numbers
let minNum = Math.min(10, 20, 30, 5);

// Math.sqrt() returns the square root of a number
let sqrtNum = Math.sqrt(num);
