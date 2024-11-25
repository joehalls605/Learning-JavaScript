
//TEMPLATE LITERALS


/*
Template literals are a more flexible way to work with strings.
They are enclosed with (``) instead of quotes.
They can include placedholders, called expressions. Indicated by ${}
These allow you to embed variables or expressions directly into the string.
*/

const variable = "world";
const greeting = `Hello, ${variable}`;

const name = "John";
const age = 25;
const message = `My name is ${name} and I'm ${age} years old.`;
console.log(message);

/*
Template literals also support multi-line strings without the need for escape characters
*/

const multilineString = `
This is a multi-line
string using
template literals`;

console.log(multilineString);