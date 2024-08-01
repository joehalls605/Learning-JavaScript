/*
Destructuring in JavaScript is a convenient way of extracting values from arrays or properties from objects into distinct variables. 
It makes it easier to work with complex data structures by breaking them down into simpler parts.
*/


const fruits = ['apple', 'banana', 'cherry'];

// Traditional way
const apple = fruits[0];
const banana = fruits[1];
const cherry = fruits[2];

// Using destructuring
const [apple, banana, cherry] = fruits;

console.log(fruit1); // Output: apple
console.log(fruit2); // Output: banana
console.log(fruit3); // Output: cherry

const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// Traditional way
const name = person.name;
const age = person.age;
const city = person.city;

// Using destructuring
const { name, age, city } = person;

console.log(name); // Output: John
console.log(age); // Output: 30
console.log(city); // Output: New York

const { name: firstName, age: years, city: location } = person;

/* Destructuring vs spread or rest operator

Use Destructuring when you want to extract values from arrays or properties from objects into distinct variables.

Use the Rest Operator (...) when you want to group the remaining elements of an array or object properties into a new array or object. This is especially useful in function parameters and destructuring assignments.

Use the Spread Operator (...) when you want to expand elements of an array or properties of an object. This is useful for copying arrays/objects or combining them.
*/