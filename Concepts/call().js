// Call is a method in JS used to invoke a function with a specified this value and arguments.
// So you can call a function with specific context (this)
// and pass arguments directly
// call() is primarily used when you want to borrow a method from one object
// and use it on another

function sayHello(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = {name: "John"};

// Using `call()` to invoke the function with a specific `this` context
sayHello.call(person, "Hello", "");

/*
The first argument to `call()` is the object that should be used as the value of `this`.
- The remaining arguments are the parameters to pass to the function
 */