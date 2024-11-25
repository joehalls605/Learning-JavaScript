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


//Destructuring
/*
In this example, the values from the colors array are assigned to variables firstColor, secondColor, 
and thirdColor in a single line, making it a convenient way to unpack values from an array.
*/

// Original array
const colors = ['red', 'green', 'blue'];

// Destructuring assignment
const [firstColor, secondColor, thirdColor] = colors;

// Output
console.log(firstColor);  // Output: red
console.log(secondColor); // Output: green
console.log(thirdColor);  // Output: blue
