// You are given an array of numbers. Use .filter() to return a new array containing only the even numbers from the original array.

let numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers);

// You have an array of strings. Use .filter() to return a new array containing only the strings that have more than 5 characters.

let words = ["apple", "banana", "kiwi", "cherry"];
const fiveCharacter = words.filter(word => word.length > 5);
console.log(fiveCharacter);

// You are given an array of numbers. Use .filter() to return a new array with numbers greater than 10.

let numbers = [5, 8, 12, 15, 2];

const greaterThanTen = numbers.filter(num => num >= 10);
console.log(greaterThanTen);

// You have an array of objects, each representing a product with a name and price. Use .filter() to return a new array containing only products with a price greater than 20.

let products = [
    { name: "Laptop", price: 800 },
    { name: "Phone", price: 200 },
    { name: "Tablet", price: 100 }
];

const productsGreaterThanTwenty = products.filter( product => product.price > 20);
console.log(productsGreaterThanTwenty);

// You are given an array of numbers. Use .filter() to return a new array containing only non-negative numbers (numbers that are greater than or equal to zero).

let numbers = [-3, 0, 7, -1, 2];

const nonNegativeNumbers = numbers.filter(num => num >= 0);
console.log(nonNegativeNumbers);