// JavaScript File: OOP Concepts

// 1. Classes (declaration, properties, methods)

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // Instance method
    speak(){
        console.log(`This is my${name}, I am speaking`);
    }

    // Getter method (encapsulation)
    get info(){
        return `${this.name} is ${this.age} years old`
    }

    // Setter method (encapsulation)
    
    set newName(newName){
        this.name = newName;
    }

    static staticMethod(){
        console.log("I'm a static method");
    }
}

let dog = new Animal("Doggy", 5);
dog.speak();
console.log(dog.info);

Animal.staticMethod(); // calling function directly on the class.

/*
Key Points:
Classes: Used to create objects with shared properties and methods.
Constructor: Initialises properties when creating instances.
Instance methods: Methods that operate on individual instances of a class.
Static methods: Methods that belong to the class itself, not instances.
Encapsulation: Using getters and setters to control access to properties.
this keyword: Refers to the current instance of the class/object.


*/