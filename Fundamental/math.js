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



// Practice

let randomNumber = Math.random();

let minimum = 1;
let maximum = 10;

let randomNumInThisRange = Math.floor(Math.random() * (max - min + 1)) + min;
// max - min + 1 equals 10
// This tells us the total range of numbers we want to generate (from 1 to 10, inclusive).
// It now multiplies for example 0.453 by 10, equaling 4.53
// Math.floor rounds this down to 4
// Then we add the min which is the 1 to the result, giving us a random number of 5.

let randomNumberInThisRange = Math.floor(Math.random() * (max - min + 1) + min);


let num2 = 7.8;

// Rounding down the number to nearest integer
let floorNumber = Math.floor(num2);

// Rounding the number up to the nearest integer
let ceiledNumber = Math.ceil(num2);

// Rounding the number to nearest integer
let roundedNumber = Math.round(num2);

// Math.max() returns the largest number from a set of numbers
let maxNumber = Math.max(10,20,30,40);

let minNumber = Math.min(10,20,30,40,50);

let sqrtNumber = Math.sqrt(num2);

// Calculating the power of a number

let base = 2;
let exponent = 3;
let powerNumber = Math.pow(base, exponent); 2^3;