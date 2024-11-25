/*

In JavaScript, inheritance is implemented using prototypes rather than the class-based inheritance found in languages like Java.


In JavaScript, every object has an internal link to another object called its prototype. 
This prototype object can have its own prototype, and so on, forming a prototype chain. 
When you try to access a property or method on an object, JavaScript will look for it on the object itself, - 
and if it doesn’t find it, it will look for it on the prototype, and then the prototype’s prototype, and so on, - 
until it reaches the end of the chain.
*/

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(this.name + ' makes a noise.');
};

function Dog(name) {
   // Invoke the Animal constructor, setting 'this' to the new Dog instance
  // This ensures that properties from Animal are initialised on the Dog instance
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype); // Set the prototype of Dog to be an instance of Animal
Dog.prototype.constructor = Dog; // Set the constructor property of Dog to Dog itself

Dog.prototype.speak = function() {
  console.log(this.name + ' barks.');
};

let dog = new Dog('Rex');
dog.speak(); // Rex barks.


/*
With the introduction of ES6, JavaScript provides a more class-like syntax inheritance.
*/

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog('Rex');
d.speak(); // Rex barks.
