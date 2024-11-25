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