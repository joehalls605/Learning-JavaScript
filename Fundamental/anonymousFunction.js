/*
In JavaScript, anonymous functions, also known as function expressions, are functions that do not have a name. These functions can be assigned to variables, passed as arguments to other functions, or used as immediately invoked function expressions (IIFE). 
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