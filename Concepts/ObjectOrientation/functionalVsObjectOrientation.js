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
When deciding whether to use functional programming (FP) or object-oriented programming (OOP) in JavaScript, several factors come into play, including the nature of the project, team expertise, and specific requirements of the application.

Use Cases for FP:

Data Transformation: FP excels in scenarios where data transformation is critical. Examples include working with arrays, lists, and streams of data.
Concurrency: FP's immutability and stateless functions make it easier to write concurrent and parallel code.
Mathematical Computations: FP is well-suited for applications involving mathematical computations or algorithms due to its pure functions and composition.
React and Redux: Many modern JavaScript frameworks and libraries, such as React and Redux, encourage functional programming principles for state management and component design.

Use Cases for OOP:

Complex Data Models: OOP is beneficial for applications with complex data models and relationships, such as those in enterprise systems.
UI Components: Designing interactive UI components, such as in graphical user interfaces or games, often benefits from OOP's encapsulation and inheritance.
Maintainability: Large codebases with many developers might find OOP's structured approach easier to manage and maintain.
Frameworks and Libraries: Many JavaScript frameworks and libraries, such as Angular, are built with OOP principles.
*/