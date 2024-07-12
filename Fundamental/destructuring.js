/*
Destructuring in JavaScript allows you to extract values from objects or arrays into variables using a concise syntax.
*/


// Object with some data
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
};

// Destructuring assignment
const { firstName, lastName, age } = person;

console.log(firstName); // Output: 'John'
console.log(lastName); // Output: 'Doe'
console.log(age); // Output: 30

const ageMultipliedByTwo = age * 2;