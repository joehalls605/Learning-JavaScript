/*
The .sort() method in JavaScript is used to sort the elements of an array in place and returns the sorted array. By default, .sort() converts the elements to strings and sorts them in ascending order according to their UTF-16 code unit values.
*/

let numbers = [10, 5, 100, 1];
numbers.sort();

console.log(numbers); // Output: [1, 10, 100, 5]



// to sort numbers correctly, you need to provide a comparison function.
let numbers2 = [10, 5, 100, 1];

numbers.sort((a, b) => a - b);

console.log(numbers2); // Output: [1, 5, 10, 100]
