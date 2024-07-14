/*
What is a Prototype?
In JavaScript, a prototype is a mechanism by which objects inherit features from one another. 
Every JavaScript object has a prototype, which is another object that the first object inherits properties and methods from.

How Does it Work?
Object Creation: When you create an object in JavaScript (using a constructor function, object literal, or class), it has a hidden link to another object, called its prototype.

Prototype Chain: If you try to access a property or method on an object and it doesn't exist on that object, JavaScript will look for it on the object's prototype. 
If it's not found there, it will keep looking up the prototype chain until it finds it or reaches the end of the chain (null).

How Does it Work?
Object Creation: When you create an object in JavaScript (using a constructor function, object literal, or class), it has a hidden link to another object, called its prototype.
Prototype Chain: If you try to access a property or method on an object and it doesn't exist on that object, JavaScript will look for it on the object's prototype. 
If it's not found there, it will keep looking up the prototype chain until it finds it or reaches the end of the chain (null).

Why Use Prototypes?
Memory Efficiency: Methods and properties defined on the prototype are shared among all instances. This reduces memory usage because they are not duplicated for each instance.
Dynamic Behavior: You can add properties and methods to the prototype at any time, and all instances will have access to them.

Prototype vs proto
prototype: A property of constructor functions. It's used to define properties and methods that should be shared by all instances of a constructor.
proto: A property of objects that points to their prototype. It forms the prototype chain.

Visualizing Prototypes
Here's a simple visualization:


rabbit object looks for walk()
rabbit doesn't have walk(), so it looks at rabbit.__proto__ (which is animal in the first example or Animal.prototype in the second example)
animal or Animal.prototype has walk(), so it is called.
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

// Creating an instance (object) of the Animal class
let rabbit = new Animal("Rabbit");

// Accessing properties and methods of the rabbit object
console.log(rabbit.eats); // Output: true (because all animals eat)
rabbit.walk(); // Output: Rabbit walks


class Fish{
    constructor(name){
        this.name = name;
        this.eats = true;
    }

    swim(){
        console.log(`This ${this.name} swims`);
    }
}

let cod = new Fish("Cod");
cod.swim();
