/*
High-order functions (HOFs) are a key concept in JavaScript (and other functional programming languages) that allow you to write more flexible and reusable code.

A high-order function is a function that either:

Takes one or more functions as arguments.
Returns a function as its result.

Why Use High-Order Functions?
High-order functions enable you to create more abstract and reusable code. They are commonly used in tasks involving iteration, transformation, or combination of data.
*/

// Array of numbers
let numbers = [1, 2, 3, 4, 5];

// High-order function: filter
let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0; // Function as an argument
});

console.log(evenNumbers); // Output: [2, 4]
