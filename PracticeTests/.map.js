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

const fahrenheit = celsiusTemperatures.map(temperature => temperature * 9 / 5 + 32);
console.log(fahrenheit);

/*
You have an array of arrays (nested arrays). Use .map() to flatten this array so that it becomes a single array containing all the elements from the nested arrays.
*/

const nestedArrays = [[1, 2], [3, 4], [5, 6]];

const flattenedArray = nestedArrays.flat(); // example of not needing to use .map

/*
Given an array of objects where each object contains firstName and lastName properties, use .map() to create a new array with each person's full name (concatenate firstName and lastName).
*/

const people = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Smith' },
    { firstName: 'Sam', lastName: 'Green' }
];

const fullnames = people.map(person => `${person.firstName}${person.lastName}`);

/*
You have an array of objects representing people, each with an age property. Use .map() to create a new array containing the unique ages (no duplicates) of the people in the original array.
 */

const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Tom', age: 40 }
];

// Use .map() to extract the ages, then use Set to remove duplicates
const uniqueAges = [...new Set(people.map(person => person.age))];

/*
Given an array of strings, use .map() to create a new array that contains the length of each string.
 */

const words = ['apple', 'banana', 'cherry', 'date'];

lengthOfStrings = words.map(word => word.length);


const numbers = [1,2,3,4,5,6];
const multipliedNumbers = numbers.map(number => number * 2);




