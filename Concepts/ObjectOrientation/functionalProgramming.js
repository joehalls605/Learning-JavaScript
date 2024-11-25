/*
Functional Programming Simplified
Functional programming (FP) is a style of programming where you build your programs using functions. Here are the main points:

Functions as Building Blocks:

Think of functions as the main building blocks of your program. Each function takes some input, does something with it, and returns an output.
Pure Functions:

A pure function is like a math function. It always gives the same output for the same input and doesn't change anything outside itself.
*/
const add = (a, b) => a + b; // Pure function

/*
No Side Effects:
Functions should not change things outside their own scope. For example, they shouldn’t modify global variables or output something to the screen.
*/

let counter = 0;
const increment = (x) => x + 1; // Pure function
const impureIncrement = (x) => { counter++; return x + 1; }; // Impure function

/*
Immutability:
Data should not be changed. Instead, you create new data based on existing data.
*/

const arr = [1, 2, 3];
const newArr = [...arr, 4]; // Create a new array instead of modifying the old one

/*
First-Class and Higher-Order Functions:
Functions can be treated like any other variable. You can pass them as arguments to other functions, return them from functions, and assign them to variables.
*/

const greet = () => "Hello";
const sayHello = greet; // Assign function to a variable
console.log(sayHello()); // "Hello"

const repeat = (fn, times) => {
    for (let i = 0; i < times; i++) {
        fn();
    }
};

repeat(() => console.log("Hi"), 3); // Calls the function 3 times

/*
Function Composition:
You can combine small functions to build more complex ones.
*/

const double = (x) => x * 2;
const square = (x) => x * x;

const doubleAndSquare = (x) => square(double(x));
console.log(doubleAndSquare(3)); // 36

// Example of it all in action:

// Pure functions
const multiply = (a, b) => a * b;
const add2 = (a, b) => a + b;

// Higher-order function (takes a function as an argument)
const applyOperation = (operation, x, y) => operation(x, y);

// Using the higher-order function
console.log(applyOperation(multiply, 2, 3)); // 6
console.log(applyOperation(add2, 2, 3)); // 5

/*
Summary
Functional programming is about using pure functions that always produce the same output for the same input and don't have side effects.
Data is immutable, meaning it doesn't change. Instead, new data structures are created.
Functions can be passed around just like any other variable and can be combined to create more complex functions.
This style of programming helps to create more predictable and maintainable code.
*/