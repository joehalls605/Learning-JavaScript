// Arrow function and destructuring


// Object representing a person
const personObject = {
    firstName: 'John',
    lastName: 'Doe'
};

// Call the original function
greetPerson(personObject);

// Using an arrow function and destructuring
const greetPersonArrow = ({ firstName, lastName }) => {
    console.log(`Hello, ${firstName} ${lastName}!`);
};y