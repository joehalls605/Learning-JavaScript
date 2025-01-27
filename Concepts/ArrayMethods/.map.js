/*
The .map() method is a high-order function in JavaScript that is used to transform each element of an array
and create a new array with the results.
The callback function is applied to each element in the array.

It can take three parameters. 
Value = the current item being processed
Index = the index (position) of the current item being processed
array = the array being called upon
*/

const numbers = [1,2,3,4,5];

const squaredNumbers = numbers.map(function (num){
    return num * num;
})

const deductedNumbers = numbers.map(function(num){
    return num - num;
});

// Output the original and the new array
console.log("Original numbers:", numbers); // contains [1, 2, 3, 4, 5].
console.log("Squared numbers:", squaredNumbers); // contains [1, 4, 9, 16, 25]

// Original array of people
const people = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Alice', lastName: 'Smith' },
    { firstName: 'Bob', lastName: 'Johnson' }
];

// Using .map() to create a new array with full names
const fullNames = people.map(function (person) {
    return `${person.firstName} ${person.lastName}`;
});

const fullNamesAndFullStop = people.map(function(person){
    return `${person.firstName} ${person.lastName} .`
});

const lastNameOnly = people.map(function(person){ // person represents the object in the array.
    return `${person.lastName}`
})


const fruits = ['apple', 'pear', 'orange']

const capitalisedFruits = fruits.map(function(fruit){
    return fruit.charAt(0).toUpperCase() + fruit.slice(1);
})

const upperCaseLastLetterFruits = fruits.map(function(fruit){
    const lastChar = fruit.charAt(fruit.length - 1).toUpperCase();
    const restOfFruit = fruit.slice(0, -1); // this retrieves all characters from the start of the string, but not the last one.
    return restOfFruit + lastChar;
});

/* The .map method is a built in function in JavaScript for arrays. It creates a new array by applying a callback function to each element of the original array.
The new array contains the results of the callback function for each element.

Reminder of callback functions:
A callback function is a function that is passed to another function as an arguement and is executed after
some operation has been completed. In the context of .map(), the callback function is applied to each element of the array.
*/


const numbers2 = [2,4,6,7,8];

const evenNumbers = numbers2.map(function(number){
    return number % 2 === 0;
});


const oddNumbers = numbers2.map(function(number){
    return number % 2 !== 0;
})

// MORE PRACTICE

const numbers = [1, 2, 3, 4, 5,];
const doubled = numbers.map(num => num * 2);


const users = [
    {id: 1, name: "Alice"},
    {id: 2, name: "Joe"},
    {id: 3, name: "Jeff"}
]
const names = users.map(user => user.name);

// or could do it in this way:

const names2 = users.map(function(user){
    return user.name;
})

const products = [
    {name: "Laptop", price: 1000},
    {name: "Phone", price: 500}
];

const updatedProducts = products.map(product => ({
    ...product, // Spread operator copy exisitng properties
    inStock: true // Adding this new boolean property.
}))

const fruits = ["apple", "banana", "cherry"];

const withIndex = fruits.map((fruit, index) =>
    `${index + 1}:${fruit}`);

const nestedArray = [[1, 2], [3,4], [5,6]];
const flattened = nestedArray.map(arr => arr.join(","));

const numbers = [1,2,3,4,5];

const result = numbers.map(num => num * 2).filter(num => num > 5 );


// Task practice:

// 1.
const numbers5 = [1,4,6,4,2];
const increased = numbers5.map(num => num + 1);
console.log(increased);


// 2.
const strings = ["peter", "gerald", "olivia"];
const uppercased = strings.map(string => string.toUpperCase());
console.log(uppercased);

// 3.
const arrayObjects = [
    {name: "Alice"},
    {name: "Peter"},
    {name: "Armando"}
]
const extractedNames = arrayObjects.map(person => person.name);
console.log(extractedNames);

// 4.
const squared = numbers5.map(number => number * number);
console.log(squared);

// 5.
const prefixAdded = strings.map((string, index) =>{
    return `${index}:  ${string}`
});

// 6.
const convertedToString = numbers5.map(num => String(num));
console.log(convertedToString);


