// DESTRUCTURING

/*
Destructuring in javascript is a way to extract values from objects or arrays and assign them to variables.
*/


// Object with some data
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  };

  // Destructuring the array, these variables are being created based on that data.
  const {firstName, lastName, age} = person;