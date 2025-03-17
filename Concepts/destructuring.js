/*
Destructuring in JavaScript is a convenient way of extracting values from arrays or properties from objects into distinct variables. 
It makes it easier to work with complex data structures by breaking them down into simpler parts.

It's about extracting values.
*/


const fruits = ['apple', 'banana', 'cherry'];

// Traditional way
const apple = fruits[0];
const banana = fruits[1];
const cherry = fruits[2];

// Using destructuring
const [apple, banana, cherry] = fruits; // Here I'm pulling out each of the values and storing them in three variables.

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
const { name, age, city } = person; // Destructuring can also be applied to objects

console.log(name); // Output: John
console.log(age); // Output: 30
console.log(city); // Output: New York

const { name: firstName, age: years, city: location } = person;

// Destructuring vs spread or rest operator

// Destructuring is used to extract values from an array or object and assign them to distinct variables.


// Rest Operator is used to collect remaning items into a new array or object. It gathers the rest of the values into one variable

const fruits = ['apple', 'banana', 'cherry', 'date'];
const [first, ...others] = fruits;

// Spread operator is used to expand values from an array or object.

const fruits = ['apple', 'banana'];
const moreFruits = ['cherry', 'date'];
const allFruits = [...fruits, ...moreFruits];  // Combines both arrays
console.log(allFruits);  // ["apple", "banana", "cherry", "date"]


function App(){
  function makeArray(){
    return [1,5,6,2,19]
  }
  const myArray = makeArray();
  const numberOne = myArray[0];
  const numberTwo = myArray[1]
}

