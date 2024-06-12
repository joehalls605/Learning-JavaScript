/*
What is __proto__?

__proto__ is a property of every JavaScript object that points to the prototype of the constructor function that created the object.
It forms part of the chain used for inheritance and delegation, known as the prototype chain.

Prototype Chain:

When you try to access a property or method on an object, JavaScript will first look for it directly on that object.
If it doesn't find it, JavaScript will look at the object's __proto__ (its prototype) to see if the property or method exists there.
This process continues up the chain until the property is found or the chain ends (typically at Object.prototype).

rototype
What is prototype?

prototype is a property of functions in JavaScript (specifically constructor functions).
It is an object that will be assigned as the __proto__ of all instances created by the constructor function.

Constructor Functions and Instances:

When you create a new object using a constructor function (with the new keyword), the new object’s __proto__ is set to the constructor function’s prototype.
This means the new object inherits properties and methods from the constructor's prototype.
*/

// Constructor function
function Person(name) {
    this.name = name;
  }
  
  // Adding a method to the prototype
  Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  // Creating an instance
  const alice = new Person('Alice');
  
  // Accessing the prototype
  console.log(alice.__proto__ === Person.prototype); // true
  
  // Using a method from the prototype
  alice.greet(); // Output: Hello, my name is Alice
  