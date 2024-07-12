/*
An Immediately Invoked Function Expression (IIFE) is a function in JavaScript that runs as soon as it is defined. It's a design pattern that is often used to create a new scope and avoid polluting the global scope.

Key Characteristics
Anonymous Function: An IIFE is often an anonymous function, meaning it doesn't have a name.
Immediately Invoked: As soon as the function is defined, it is immediately executed.
*/

(function() {
    console.log("This function runs immediately!");
  })();

  
  /*
Purpose of IIFE
Avoid Global Variables: IIFEs create a new scope, which helps to avoid polluting the global scope with variables and functions.
Encapsulation: Variables and functions defined inside an IIFE cannot be accessed from outside, providing encapsulation and reducing potential conflicts.
  */

(function(){
  console.log("This function runs straight away!");
})();