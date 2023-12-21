
//Arrays

let numbers = [1, 2, 3, 4, 5];

numbers.push(6);
numbers.pop();

let doubled = numbers.map(num => num * 2);


//Applying functions to arrays.

// Adds elements to the beginning of the array
numbers.unshift(1);


// Shift
// Removes the first element from the array
let removedElement = numbers.shift();

//Concat

let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];

let combinedNumbers = numbers1.concat(numbers2);

// Reverse

numbers.reverse(); // [5, 4, 3, 2, 1]

// Returns a portion of the array
let slicedNumbers = numbers.slice(1, 4); // [2, 3, 4]


let numbersNew = [1, 2, 3, 4, 3, 5];

let indexOfThree = numbersNew.indexOf(3); // 4

let fruits = ["apple", "banana", "orange"];

// Joins all elements of an array into a string
let fruitString = fruits.join(", ")// "apple, banana, orange"

// Changes the contents of an array by removing or replacing existing elements
// Removes 1 element at index 2 and inserts 6, resulting in [1, 2, 6, 4, 5]
// Starting at index 2, remove one element, insert 6 at that position.

numbers.splice(2, 1, 6) 
