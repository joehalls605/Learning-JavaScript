// Shift removes the first element from an array and returns the removed element.
// This operation modifies the original array.

let fruits = ["Apple", "Cheery", "Pear"]
let shiftedElement = fruits.shift();

// Unshift adds one or more elements to the beginning of an array and returns the new length of the array.

const newLength = fruits.unshift("Passionfruit");
console.log(newLength); // 4

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();

console.log("Reversed array:", numbers); // Output: [5, 4, 3, 2, 1]


fruits.sort(); // sorts in alphabetical order.

sum = numbers.reduce((acc, curr) => acc + curr, 0); 

let includesThree = numbers.includes(3); // output true.

// go over shift and unshift.