/*
Functional Programming (FP)
Functional programming is a programming paradigm where computation is treated as the evaluation of mathematical functions and avoids changing state and mutable data. Here's a breakdown of its key concepts:

First-Class and Higher-Order Functions:

Functions are treated as first-class citizens. They can be assigned to variables, passed as arguments, and returned from other functions.
Higher-order functions are functions that take other functions as arguments or return them as results.
Pure Functions:

Pure functions always produce the same output for the same input and have no side effects (they don't alter any state or data outside their scope).
Immutability:

Data is immutable, meaning once it's created, it cannot be changed. Instead, new data structures are created with the desired changes.
Function Composition:

Functions are composed together to build more complex operations. Small, reusable functions are combined to create more complex functions.
Declarative Approach:

Focuses on what to solve rather than how to solve it. Code describes the logic of computation without describing its control flow.
*/

// Pure function
const add = (a, b) => a + b;

// Higher-order function
const map = (arr, fn) => arr.map(fn);

// Function composition
const compose = (f, g) => (x) => f(g(x));

// Usage
const increment = (x) => x + 1;
const double = (x) => x * 2;

const incrementAndDouble = compose(double, increment);

console.log(incrementAndDouble(2)); // 6

/*
Object-Oriented Programming (OOP)
Object-oriented programming is a paradigm centered around objects rather than functions. These objects are instances of classes, which can contain both data and methods. Here's a breakdown of its key concepts:

Classes and Objects:

Classes are blueprints for creating objects (instances). They define properties and methods.
Objects are instances of classes.
Encapsulation:

Data (attributes) and methods (functions) are bundled together within a class. Access to this data can be controlled using access modifiers (private, protected, public).
Inheritance:

Classes can inherit properties and methods from other classes. This allows for code reuse and the creation of hierarchical relationships.
Polymorphism:

Objects can be treated as instances of their parent class rather than their actual class. Methods can be overridden to provide specific behavior in subclasses.
Abstraction:

Classes can provide a simplified interface to the complex reality. Only essential details are exposed, hiding the implementation details.
*/

class Animal {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log(this.name + " walks");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent constructor
        this.breed = breed;
    }

    bark() {
        console.log(this.name + " barks");
    }
}

// Usage
const myDog = new Dog("Rex", "Golden Retriever");

myDog.walk(); // Rex walks
myDog.bark(); // Rex barks


/*


*/