/*
filter Method.

What it does:
filter creates a new array with all elements that pass the test implemented by the provided function.
In other words, it filters out elements that do not meet the condition.
*/

const numbers = [1, 2, 3, 4, 5, 6];

// Function to test if a number is even
const isEven = number => number % 2 === 0;

// Use filter to get only the even numbers. Creates a new array.
const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers); // Output: [2, 4, 6]



const numbers2 = [1, 2, 8, 4, 5, 3];

// This defines an arrow function name isEight. The function takes a single parameter number, and returns true if the number is 8.
const isEight = number => number === 8;

// It then uses the filter method to create a new array numberEight, it calls the isEight function on each element of numbers2 array.
// Only elements that return true are included in the new array
const numberEight = numbers2.filter(isEight);

console.log(numberEight); // Output: [8]
