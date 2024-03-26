/*
this Keyword in JavaScript
In JavaScript, the keyword 'this' refers to the current execution context. 
The value of 'this' is determined by how a function is called, and it can behave differently depending on how the function is invoked.
*/

// Global Context:

// In the global context, 'this' refers to the global object, which in browsers is the window object.
console.log(this === window);

// Function Context:

// When a function is called without any context, 'this' refers to the global object (window in browsers).
function myFunction() {
    console.log(this);
}

myFunction(); // Logs the window object in a browser environment.

// Object Context:

// In an object method, 'this' refers to the object that owns the method.
const obj = {
    name: "Joe",
    greet: function() {
        console.log(this.name);
    }
}

obj.greet(); // Logs 'Joe'.

// Constructor Context:

// Inside a constructor function, 'this' refers to the newly created object.
function Person(name) {
    this.name = name;
}

// 'person1' is an instance of the Person constructor.
const person1 = new Person('Alice');

console.log(person1.name); // Logs 'Alice'.
