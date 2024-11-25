/*
High-order functions (HOFs) are a key concept in JavaScript (and other functional programming languages) that allow you to write more flexible and reusable code.

A high-order function is a function that either:
1. Takes one or more functions as arguments.
2. Returns a function as its result.

Why Use High-Order Functions?
High-order functions enable you to create more abstract and reusable code. They are commonly used in tasks involving iteration, transformation, or combination of data.
*/

// Example 1: Using `filter` (Function as an Argument)
let numbers = [1, 2, 3, 4, 5];

// `filter` is a high-order function that takes another function as an argument.
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0; // This function is used to test each element
});

console.log(evenNumbers); // Output: [2, 4]

// Example 2: Using `map` (Function as an Argument)
let squaredNumbers = numbers.map(function(number) {
    return number * number; // This function is applied to each element
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Example 3: Using `reduce` (Function as an Argument)
let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue; // This function is used to reduce the array to a single value
}, 0);

console.log(sum); // Output: 15

// Example 4: Returning Functions (Function as a Return Value)
function createMultiplier(factor) {
    // This function returns another function
    return function(number) {
        return number * factor; // The returned function multiplies a number by `factor`
    };
}

const multiplyByTwo = createMultiplier(2);
const multiplyByThree = createMultiplier(3);

console.log(multiplyByTwo(5)); // Output: 10 (5 * 2)
console.log(multiplyByThree(5)); // Output: 15 (5 * 3)
