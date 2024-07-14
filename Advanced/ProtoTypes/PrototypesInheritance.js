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


class FishClass {
    // Constructor for FishClass
    constructor(name) {
        this.name = name; // Initialise name property with the provided name
        this.swims = true; // Set swims property to true by default
    }

    // Method to simulate swimming
    swim() {
        console.log("I'm swimming");
    }   
}

class CodClass extends FishClass {
    // Constructor for CodClass, which extends FishClass
    constructor(name) {
        super(name); // Calls the constructor of the parent class (FishClass) with the 'name' parameter
        this.splash = true; // Adds a splash property to CodClass instances
    }

    // Method to simulate diving
    dive() {
        console.log("I'm diving");
    }
}

let codClass = new CodClass("Cod"); // Create a new instance of CodClass with name "Cod"
codClass.swim(); // Output: "I'm swimming" - Calls the swim() method inherited from FishClass
codClass.dive(); // Output: "I'm diving" - Calls the dive() method defined in CodClass
