/*
Prototype-based inheritance is a core concept in JavaScript that allows objects to inherit properties and methods from other objects.

Prototypes:
In JavaScript, every object has a prototype, which is a reference to another object. This prototype object acts as a blueprint for the properties and methods that the object inherits.
When you access a property or method of an object, JavaScript first looks for it directly on the object. If it doesn't find it, it looks at the object's prototype, and so on, until it reaches the top-level prototype, which is Object.prototype.

Constructor Functions:
Constructor functions are used to create objects that share the same properties and methods.
When you create an object using a constructor function, the object's prototype is set to the prototype property of the constructor function.

Inheritance:
Inheritance in JavaScript is achieved by setting the prototype of one object to be another object.
When an object doesn't have a property or method, JavaScript looks up the prototype chain until it finds the property or method or reaches the top-level prototype (Object.prototype).
*/

// Constructor function
function Animal(name) {
    this.name = name;
  }
  
  // Adding a method to the prototype of Animal
  Animal.prototype.sayName = function() {
    console.log("My name is " + this.name);
  };
  
  // Creating objects using the Animal constructor
  let cat = new Animal("Whiskers");
  let dog = new Animal("Buddy");
  
  // Both objects inherit the sayName method from the Animal prototype
  cat.sayName(); // Output: My name is Whiskers
  dog.sayName(); // Output: My name is Buddy
  