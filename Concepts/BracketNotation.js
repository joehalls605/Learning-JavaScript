/*
Bracket notation (dynamic access) – allows you to access properties using variables, expressions, or property names that include special characters (like spaces).
You can use bracket notation when you don't know the name of the property, or it is dynamic, below I do know it, as an example.

*/

const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

const propertyName = "age";

console.log(person[propertyName]);
person[propertyName] = 26; // changing age to 26

// Example with dynamic keys

const car = {
    brand: "Tesla",
    model: "Model S",
    year: 2020
};

const key = "model";

console.log(car[key]); // I'm accessing the model property.

// Using bracket notation with strings

const user = {
    firstName: "John",
    lastName: "Doe"
};

const nameKey = "firstName";
console.log(user[nameKey]);


// More practice

let student = {
    "first name": "John",
    age: 20,
    grade: "A",
    subject: "Maths"
};

console.log(student["first name"]); // "John"
console.log(student["grade"]) // "A";
let key = "A"; // So instead of the above I have created a dynamic key instead.
console.log(student[key]); // I still get "A"

let colours = ["Blue", "Green", "Red"];
console.log(colours[1]); // "Green"




