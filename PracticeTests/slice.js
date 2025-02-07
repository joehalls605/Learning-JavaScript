// You have an array of numbers. Use the slice() method to get a new array that includes only the numbers from index 2 to index 4 (inclusive).

let numbers = [10, 20, 30, 40, 50, 60];
const twoToFour = numbers.slice(2,4);

// You have an array of strings. Use slice() to create a new array that contains the first three elements.

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
const firstThreeElements = fruits.slice(0,3);

// You have an array of mixed values. Use slice() to get a new array that contains all elements from index 1 to the end of the array.

let mixedArray = [1, "apple", true, 10, "banana"];
const fromIndexOneToEnd = mixedArray.slice(1); // you're limiting it to one less than the end, so it's missing the last element "banana".

// You have an array of dates. Use slice() to get a new array containing the last two dates.

let dates = ["2024-01-01", "2024-02-01", "2024-03-01"];
lastTwoDates = dates.slice(dates.length - 2);

// You have an array of numbers. Use slice() to get a new array that contains a subset of numbers from the middle of the array, starting from index 2 to index 5.
let numbers = [5, 10, 15, 20, 25, 30, 35];
const subset = numbers.slice(2,5);
