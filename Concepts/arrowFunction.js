/*
Arrow Functions in JavaScript
------------------------------
Arrow functions provide a shorter syntax for writing functions.
They are useful when you want concise code, especially for single expressions.

Benefits:
- Shorter and more readable.
- No need for the `function` keyword.
- Lexical `this`: inherits `this` from surrounding context.
*/

// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

/*
Lexical Scoping of `this`
---------------------------
Arrow functions inherit `this` from the surrounding scope.
Regular functions do not.
*/

function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++; // Arrow function keeps `this` context
    }, 1000);
}

const personInstance = new Person();

/*
Examples of Arrow Function Usage
---------------------------------
*/

// Regular function
const regularFunction = function () {
    return 42;
};

// Arrow function (implicit return)
const arrowFunction = () => 42;

// Arrow function with block body (explicit return)
const arrowFunctionWithBody = () => {
    const number = 42;
    return number;
};

// Arrow function as a callback
const numbers = [1, 2, 3, 4, 5, 6];

// Regular function
const evenNumbersWithRegular = numbers.filter(function (number) {
    return number % 2 === 0;
});
console.log(evenNumbersWithRegular); // [2, 4, 6]

// Arrow function
const evenNumbersWithArrow = numbers.filter(number => number % 2 === 0);
console.log(evenNumbersWithArrow); // [2, 4, 6]

/*
Regular vs Arrow in setTimeout
-------------------------------
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
Implicit Returns
-----------------
Arrow functions can return values implicitly for single-line expressions.
*/

const regularAdd = function (x, y) {
    return x + y;
};

const arrowAdd = (x, y) => x + y;

const isPositive = number => number > 0;
console.log(isPositive(3)); // true

/*
More Arrow Function Examples
-----------------------------
*/

const arrowFunction1 = () => console.log("I'm an arrow function");
const arrowFunction2 = () => console.log("Hello");

const num1 = 1;
const num2 = 2;
const arrowFunction3 = () => num1 + num2;
console.log(arrowFunction3()); // 3

const double = x => x * 2;
console.log(double(3)); // 6

/*
When to Use Arrow Functions
----------------------------
- Array methods: map, filter, reduce
- Event listeners
- Callbacks and asynchronous code
*/

document.querySelector("button")?.addEventListener("click", () => {
    console.log("Button clicked!");
});

setTimeout(() => console.log("Time is up!"), 1000);

/*
When NOT to Use Arrow Functions
--------------------------------
1. When `this` matters (e.g., in object methods)
2. In class constructors
*/

// `this` issue in object method
const person = {
    name: "Alice",
    greet: () => {
        console.log(`Hello, my name is ${this.name}`); // undefined
    }
};
person.greet(); // Hello, my name is undefined

// Arrow function in class constructor (not ideal)
class Animal {
    constructor(name) {
        this.name = name;
    }

    // Not recommended: use regular method
    speak = () => {
        console.log(`${this.name} makes a noise!`);
    }
}
