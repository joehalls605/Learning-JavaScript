/*
In JavaScript, dynamic property access refers to accessing an object’s properties using variable values (such as keys stored in a variable),
instead of hard-coding the property name directly.

This can be useful when you need to access object properties dynamically (e.g., user input, iterating over objects, etc.).

There are two common ways to access properties dynamically:

1. Dot notation (static access) – works when the property name is known and fixed.
2. Bracket notation (dynamic access) – allows you to access properties using variables, expressions, or property names that include special characters (like spaces).

Bracket notation is the key feature that allows for dynamic property access. It lets you access object properties using variables or strings.
*/

const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

const propertyName = "age"; // You can use a variable here

console.log(person[propertyName]);
// Output: 25

const car = {
    brand: "Tesla",
    model: "Model S",
    year: 2020
};

const key = "model"; // Dynamic property

console.log(car[key]);

const user = {
    firstName: "John",
    lastName: "Doe"
};

const firstNameKey = "firstName";
const lastNameKey = "lastName";

console.log( user[firstNameKey] + user[lastNameKey]);

// Adding a new key

const employee = {
    name: "David",
    position: "Manager"
};

const newProperty = "Salary";
employee[newProperty] = 5000;

/*
So above I knew the property  name, but when I don't know the property name the bracket is useful.
 */

const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

const userInput = prompt("Enter a property name: ");
console.log(person[userInput]);



/*
Dot notation is the most straightforward and common way to access or modify properties of an object in JavaScript. It is used when you know the property name beforehand and it follows a valid identifier format (e.g., no spaces, no special characters, no starting with a number).
*/

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Accessing properties using dot notation
console.log(person.name); // Output: John
console.log(person.age);  // Output: 30
console.log(person.city); // Output: New York
