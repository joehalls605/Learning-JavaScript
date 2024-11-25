/*
.bind() in JavaScript is a method used to "lock in" a specific value of this for a function, 
no matter how or where that function is later called.

Think of it Like Setting a Permanent Context
When you use .bind(), you’re setting a permanent this context for that function. 
So, no matter where or when the function is called, it will always use the this value you set with .bind().
*/

const person = {
  name: "Alice",
  greet() {
    console.log("Hello, " + this.name);
  },
};

const greetFunction = person.greet;
greetFunction(); // Without .bind()< this will be undefined, so no name.

// Now using .bind to lock in "person" as "this"
const boundGreet = person.greet.bind(person);
boundGreet();

/*
A common reason to use .bind() is when passing functions as arguments. 
Without .bind(), JavaScript might lose track of what this is supposed to be.

For example, if you want to use greet later on with a button click, 
this might get confusing without .bind():
*/

button.onclick = person.greet.bind(person); // this will always be person

/*
Summary:
.bind(someValue) locks in someValue as this for the function.
Useful when you want a function to always refer to the same object (or context) as this, no matter how it’s called later.
*/

// say you are a delivery driver and you have a GPS, without the GPS you might end up at wrong location, but with the GPS locked in, no matter what road you take you can always go to the right place.