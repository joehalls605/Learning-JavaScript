// You are given an array of numbers. Use shift() to remove the first element of the array and return the new array.

let numbers = [5, 10, 15, 20];
let firstNumber = numbers.shift();
console.log(numbers);

// You have an array of strings. Use unshift() to add the string "Hello" at the beginning of the array.

let words = ["world", "everyone", "friend"]
words.unshift("Hello");
console.log(words);

// What would happen if you use shift() on an empty array? Write code to demonstrate the result.

let emptyArray = [];
console.log(emptyArray.shift());

// You are given an array of numbers. Use unshift() twice to add two numbers (5 and 10) to the beginning of the array.

let numbers = [15, 20, 25];
numbers.unshift(5);
numbers.unshift(10);
console.log(numbers);

// You are given an array of characters. Use shift() to remove the first character and store it in a variable, then return both the removed character and the updated array.

let chars = ['a', 'b', 'c', 'd'];

const removedCharacter = chars.shift();

console.log(removedCharacter);
console.log(chars);

// You are given an array of numbers. Use unshift() to add three numbers (10, 20, 30) to the beginning of the array.

let numbers = [40, 50, 60];
numbers.unshift(10,20,30);
console.log(numbers);
