/*
The .map() method is a higher-order function in JavaScript that is used to transform each element of an array and create a new array with the results.
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

const fruits = ['apple', 'pear', 'orange']

const capitalisedFruits = fruits.map(function(fruit){
    return fruit.charAt(0).toUpperCase() + fruit.slice(1);
})
