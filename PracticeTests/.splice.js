// You are given an array of numbers. Use .splice() to remove 3 elements starting from index 2 and log the resulting array.

let numbers = [10, 20, 30, 40, 50, 60]
numbers.splice(2,3);
console.log(numbers);


// You have an array of fruit names. Use .splice() to add the fruit "kiwi" at index 2 without removing any elements.

let fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 0, "kiwi");

// You are given an array of numbers. Use .splice() to replace the number at index 1 with the number 99, and remove the existing element at that index.

let numbers = [5, 10, 15, 20];
numbers.splice(1, 1, 99);

// You have an array of strings. Use .splice() to remove the last element from the array.

let animals = ["cat", "dog", "elephant"];
animals.splice(animals.length - 1, 1);

// You are given an array of numbers. Use .splice() to add two numbers (5 and 10) at index 1, without removing any elements.

let numbers = [1, 2, 3, 4];
numbers.splice(1, 0, 5, 10);


