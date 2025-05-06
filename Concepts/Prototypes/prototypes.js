/*
A prototype is a way for JavaScript objects to share properties and methods.
Every object has a hidden link to another object—its prototype.

I can create a function and add it to an object's prototype.
*/

// Animal class definition
class Animal {
    constructor(name) {
        this.name = name;
        this.eats = true; // Every animal eats by default
    }

    walk() {
        console.log(`${this.name} walks`); // Method to make the animal walk
    }
}

// Add a new method to the Animal prototype
Animal.prototype.sleep = function(){
    console.log(`${this.name} sleeps`);
}

// Creating anb instance (object) of the Animal class
let rabbit = new Animal("Rabbit");

// Accessing properties and methods of the rabbit object
rabbit.walk();
rabbit.sleep();
