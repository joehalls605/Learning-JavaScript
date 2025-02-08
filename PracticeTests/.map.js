// Given an array of numbers, use .map() to create a new array where each number is doubled.
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(number => number * 2);

// You have an array of strings representing people's names. Use .map() to create a new array with each name in uppercase.

const names = ['alice', 'bob', 'charlie', 'dave'];

const uppercased = names.map(name => name.toUpperCase());

// Given an array of numbers, use .map() to create a new array that contains the square of each number.

const squaredNumber = numbers.map(number => number * number);


// You have an array of objects representing products, each with a price property. Use .map() to create a new array that contains only the price of each product.

const products = [
    { name: 'Shirt', price: 20 },
    { name: 'Pants', price: 30 },
    { name: 'Hat', price: 15 }
];

// You have an array of objects representing products, each with a price property. Use .map() to create a new array that contains only the price of each product.

const pricedProducts = products.map(product => product.price);

// You have an array of numbers. Use .map() to create a new array where each number is converted to a string with a dollar sign in front of it (e.g., 100 → "$100").

const amounts = [5, 10, 25, 50];

const displayedAmount = amounts.map(number => {
    const stringConverted = number.toString();
    return `$${stringConverted}`;
});

// Slightly harder questions

/*
Given an array of temperatures in Celsius, use .map() to convert each temperature to Fahrenheit. The formula for converting Celsius to Fahrenheit is:
Fahrenheit = Celsius × 5 / 9 +32
 */

const celsiusTemperatures = [0, 20, 30, 100];

const fahrenheit = celsiusTemperatures.map(temperature => temperature * ( 9 / 5 + 32))
console.log(fahrenheit);


