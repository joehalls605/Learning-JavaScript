/*
In JavaScript, functions are objects.
They can possess properties and methods like any other object.
It's a key feature of JS's flexible nature.

In JS, functions are first class citizens, this emans they can be assigned to variables, passed to arguments to other functions
and returned as values from other functions.
Since functions are objects, they can have properties and mnethods that can be accessed dynamically.
Functions can be used as constructor functionsd to create objects using the new keyword.
*/

// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Adding properties to the function object
greet.language = "English";
greet.author = "Unknown";

// Adding a method to the function object
greet.sayHello = function() {
    return "Hello!";
};

// Accessing function properties and invoking method
console.log(greet.language); // Output: "English"
console.log(greet.author);   // Output: "Unknown"
console.log(greet.sayHello()); // Output: "Hello!"


// Using function as a constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var john = new Person("John", 30);
console.log(john.name); // Output: "John"
console.log(john.age);  // Output: 30


