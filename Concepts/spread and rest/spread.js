/*
The spread syntax (...) in JavaScript spreads and expands an array or object into individual elements.
It’s useful for passing array elements as separate arguments to functions, combining arrays/objects, or cloning them.

Key Difference:
Spread Operator (...): Expands elements of an iterable into individual items (used in function calls, array/object literals).
Rest Operator (...): Collects and gets the rest of multiple elements into an array (used in function parameters).

Spread - is unpacking elements of an iterable into individual items
Rest is packing and collecting up elements into a single array (used in paramaters)
*/


const arr = [1, 2, 3];
const arrTwo = [...arr, 4, 5, 6];
console.log(arr2); // Outputs: [1, 2, 3, 4, 5, 6]

let nums = [1, 3, 4, 5];
// let maximum = Math.max(nums); // this would output NaN.
let maximum = Math.max(...nums); // by using the spread, you're opening the box and unpacking the array.
console.log(maximum); // Outputs: 5

let usernameFirst = "Joseph";
let usernameSurname = "Halls";

let lettersforFirstAndSurname = [...usernameFirst, ...usernameSurname]; // ["J", "o", "s", "e", "p", "h" "h" "a" "l" "l" "s"]
console.log(lettersforFirstAndSurname);


// Creating a shallow copy

let fruits = ["apple", "pear", "orange"];
let vegetables = ["carrot", "onion"];
let food = [...fruits, ...vegetables]; // unpacks them and adds to food. This shows individual elements.
// If I did not use spread operator, it would create a nested array.
console.log(food); // Outputs: ["apple", "pear", "orange", "carrot", "onion"]

const numbers = [1, 2, 3];
console.log(...numbers); // Outputs: 1 2 3

const arr0 = [1, 2, 3];
const arr3 = [4, 5, 6];

const concatenatedArray = [...arr0, ...arr3];
console.log(concatenatedArray); // Outputs: [1, 2, 3, 4, 5, 6]

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

/* 
 The reduce method is called on the numbers array. It takes a callback function and an initial value (0 in this case). 
 The callback function receives two parameters: total (the accumulated result) and num (the current element being processed).
*/

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result); // Outputs: 21

// Spread syntax in arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Outputs: [1, 2, 3, 4, 5, 6]

/* 
In this example, 
the spread syntax (...arr1 and ...arr2) is used to spread the elements of arr1 and arr2 into a new array called combinedArray.
*/

// Spread syntax in objects

const person = { name: "John", age: 30 };
const details = { job: "Software Dev", city: "London" };

const combinedDetails = { ...person, ...details };
console.log(combinedDetails); // Outputs: { name: "John", age: 30, job: "Software Dev", city: "London" }
