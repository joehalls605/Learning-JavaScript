/*
n JavaScript, prototype inheritance allows objects to inherit properties and methods from other objects. Here’s how it works:
*/

function Animal(name) {
    this.name = name;
    this.eats = true; // All animals eat by default
}

// Adding a method to the Animal.prototype, shared among all instances of Animal
Animal.prototype.walk = function() {
    console.log(this.name + " walks");
};

// Creating a Subclass Rabbit with ProtoType Inheritance

function Rabbit(name) {
    Animal.call(this, name); // Inherit properties from Animal
    this.jumps = true; // Additional property specific to rabbits
}

Rabbit.prototype = Object.create(Animal.prototype); // Set up prototype chain
Rabbit.prototype.constructor = Rabbit; // Fix the constructor reference
Rabbit.prototype.jump = function() {
    console.log(this.name + " jumps");
};

/*
Rabbit inherits from Animal using Object.create(Animal.prototype). 
This links Rabbit.prototype to Animal.prototype, allowing Rabbit instances to inherit methods like walk.
*/

let rabbit = new Rabbit("Bunny");

console.log(rabbit.name); // Output: "Bunny"
console.log(rabbit.eats); // Output: true (inherited from Animal)
console.log(rabbit.jumps); // Output: true

rabbit.walk(); // Output: "Bunny walks" (inherited from Animal.prototype)
rabbit.jump(); // Output: "Bunny jumps"


/*
Prototype inheritance in JavaScript allows for efficient sharing of methods across objects and supports the creation of inheritance hierarchies.
It's a fundamental mechanism in JavaScript's object-oriented programming paradigm, providing flexibility and memory efficiency compared to traditional class-based inheritance in other languages.
*/


/* ES6 Changes

ES6 introduced a class syntax that simplifies the creation of constructor functions and inheritance hierarchies. 
The example using classes (AnimalClass and RabbitClass) achieves the same inheritance as the prototype-based approach but with a more modern and intuitive syntax.

*/

class AnimalClass {
    constructor(name) {
        this.name = name;
        this.eats = true;
    }

    walk() {
        console.log(this.name + " walks");
    }
}

class RabbitClass extends AnimalClass {
    constructor(name) {
        super(name);
        this.jumps = true;
    }

    jump() {
        console.log(this.name + " jumps");
    }
}

let rabbitClass = new RabbitClass("Bunny");

console.log(rabbitClass.name); // Output: "Bunny"
console.log(rabbitClass.eats); // Output: true (inherited from AnimalClass)
console.log(rabbitClass.jumps); // Output: true

rabbitClass.walk(); // Output: "Bunny walks"
rabbitClass.jump(); // Output: "Bunny jumps"
