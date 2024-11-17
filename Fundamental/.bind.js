// .bind()

/*
In JavaScript, the .bind() method creates a new function with a specific 'this' value and optional preset arguments.
This is useful for controlling the context (the value of 'this') in which a function is invoked.
*/

/* Example:
Imagine you have a dog object and you want to use its bark method separately from the dog object.
If you call dog.bark(), it works fine because 'this' refers to the 'dog' object inside the bark method.
*/

const dog = {
  name: 'Buddy',
  bark: function() {
      console.log(this.name + ' says woof!');
  }
};

// Calling bark directly works fine
dog.bark(); // Output: Buddy says woof!

// However, if you assign the bark method to a variable and call it, there is a problem
const barkFunction = dog.bark;
barkFunction(); // Output: undefined says woof! (or error in strict mode)

/*
This happens because 'this' inside 'barkFunction' no longer refers to the dog object but to the global object, 
which doesn't have a 'name' property.
*/

// To fix this, use bind(). It allows you to explicitly set what 'this' refers to when the function is called.
const barkFunctionBind = dog.bark.bind(dog);
barkFunctionBind(); // Output: Buddy says woof!

/*
Explanation:
dog.bark: This accesses the bark method of the dog object.
.bind(dog): This sets 'this' inside the bark method to always refer to the dog object, even when called separately.
*/

// Another example with a different object
const module = {
  x: 42,
  getX: function() {
      return this.x;
  }
};

// Assigning the method to a variable and calling it
const unboundGetX = module.getX;
console.log(unboundGetX()); // Output: undefined (or error in strict mode)

// Using .bind() to ensure 'this' refers to 'module'
const boundGetX = module.getX.bind(module);
console.log(boundGetX()); // Output: 42
