/*
In JavaScript, anonymous functions are function expressions that do not have a name. 
They are defined using the function keyword without specifying a name. These functions can be assigned to variables, passed as arguments to other functions, or used as immediately invoked function expressions (IIFE).
*/

const greet = function() {
    console.log("Hello, World!");
  };
  
  greet(); // Output: Hello, World!

  /*

  They're often used where a function is needed temporarily, or as a callback function.

Benefits of Anonymous Functions
Encapsulation: Keeps code that is only needed in a specific context local to that context.
Cleaner Code: Reduces the number of named functions, making the code less cluttered.
Functional Programming: Supports the use of higher-order functions and functional programming techniques.
  */


function doSomething(callback) {
  console.log("Doing something...");
  callback();
}

doSomething(function() {console.log("Callback executed!");});
