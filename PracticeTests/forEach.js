// You are given an array of numbers. Use forEach() to double each number in the array and log the result.

let numbers = [1, 2, 3, 4];
numbers.forEach(num => {
    console.log(num * 2);
})

// You have an array of strings. Use forEach() to convert each string to uppercase and log the results.

let words = ["apple", "banana", "cherry"];

words.forEach(word => {
    console.log(word.toUpperCase());
})

// You are given an array of numbers. Use forEach() to calculate the sum of all elements and log the result.

let numbers = [5, 10, 15, 20];
let total = 0;

numbers.forEach(number => {
    total += number;
});

// You have an array of mixed values. Use forEach() to log the index and the value of each element in the array.

let items = ["apple", "banana", "cherry"];

items.forEach((item, index) => {
    console.log(`Index:${item.index}, Value:${item.value}`);
})

// You are given an array of strings. Use forEach() to log the length of each string in the array.

let words = ["hello", "world", "javascript"];

words.forEach(word => {
    console.log(word.length);
})