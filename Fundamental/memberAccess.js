/*
Member access in JavaScript is a way to access or retrieve values from an object using the dot (.) or bracket ([]) notation.
*/

// Dot Notation is the most common way to access properties of an object

let person = {
    name: "Alice",
    age: 25
};

console.log(person.name); // "Alice"
console.log(person.age);  // 25

// Bracket notation lets you access properties using a string or a variable containing the property name
// This is helpful when the property name is dynamic or has special characters

let person2 = {
    name: "Alice",
    age: 25,
    "favorite color": "blue"  // property with spaces
};

console.log(person["name"]);           // "Alice"
console.log(person["favorite color"]); // "blue"
