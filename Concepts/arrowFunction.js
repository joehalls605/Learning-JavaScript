/*
Arrow Functions in JavaScript
--------------------------------
Arrow functions provide a shorthand syntax for writing functions. They are especially useful for concise code when the function body contains a single expression.
Benefits:
- More concise and readable.
- No need for boilerplate code like `function` keyword.
- Lexical scoping of `this` (inherits `this` from the surrounding context).
*/

// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

/*
Arrow functions do not have their own `this` context. Instead, they inherit `this` from the surrounding scope.
Example:
*/

function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++; // 'this' refers to the Person instance
    }, 1000);
}

const personInstance = new Person(); // Creates a new Person and increments `age` every second

/*
Examples of Arrow Function Usage
---------------------------------
*/

// Regular function
const regularFunction = function () {
    return 42;
};

// Arrow function (single-line implicit return)
const arrowFunction = () => 42;

// Arrow function with a function body (explicit return)
const arrowFunctionWithBody = () => {
    const number = 42;
    return number;
};

// Using an arrow function as a callback
const numbers = [1, 2, 3, 4, 5, 6];

// Regular function with `filter`
const evenNumbersWithRegular = numbers.filter(function (number) {
    return number % 2 === 0;
});
console.log(evenNumbersWithRegular); // [2, 4, 6]

// Arrow function with `filter`
const evenNumbersWithArrow = numbers.filter(number => number % 2 === 0);
console.log(evenNumbersWithArrow); // [2, 4, 6]

/*
Lexical Scoping with Arrow Functions
-------------------------------------
Arrow functions capture the `this` value of the surrounding context, while regular functions have a dynamic `this` that depends on how they are called.
*/

function RegularFunction() {
    this.value = 42;

    // Regular function loses `this` context
    setTimeout(function () {
        console.log(this.value); // undefined
    }, 1000);

    // Arrow function keeps `this` context
    setTimeout(() => {
        console.log(this.value); // 42
    }, 1000);
}

const regularInstance = new RegularFunction();

/*
Implicit Return with Arrow Functions
-------------------------------------
If an arrow function has a single statement, the result of that statement is implicitly returned without the `return` keyword.
*/

// Regular function
const regularAdd = function (x, y) {
    return x + y;
};

// Arrow function with implicit return
const arrowAdd = (x, y) => x + y;

// Single-line arrow function with a single parameter
const isPositive = number => number > 0;
console.log(isPositive(3)); // true

/*
More Examples of Arrow Functions
---------------------------------
*/

// Arrow function with a single statement
const arrowFunction4 = () => console.log("I'm an arrow function");

// Arrow function with a concise body
const arrowFunction5 = () => console.log("Hello");

// Arrow function with external variables
const num1 = 1;
const num2 = 2;
const arrowFunction6 = () => num1 + num2;
console.log(arrowFunction6()); // 3

// Single parameter arrow function
const double = x => x * 2;
console.log(double(3)); // 6
