/*
.bind() is used to create a new function, that when called has it's this keyword to a specific value.

.bind() is a way to tell a function, "no matter where you're called or how you're called, I want you to use this specific value as this inside your function body."
When you call .bind() on a function and pass a value, it creates a new function. This new function is like the original function, but it is hardwired to use the value you passed as this whenever the new function is called.
So, if a function needs a specific this value to work correctly, but you want to call it in different places or different ways, you can use .bind() to create a new function that is permanently bound to the this value you want.

*/

const person = {
  name: 'Alice',
  greet: function() {
    console.log('Hello, my name is ' + this.name);
  }
};

// Calling greet() as a method
person.greet(); // Output: Hello, my name is Alice

// Trying to call greet() as a regular function
const greetUnbound = person.greet;
greetUnbound(); // Output: Hello, my name is undefined

// Using .bind() to create a new function with 'this' bound to person
const greetBound = person.greet.bind(person);
greetBound(); // Output: Hello, my name is Alice
