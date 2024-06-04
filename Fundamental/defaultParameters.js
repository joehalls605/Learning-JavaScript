/*
In JavaScript, default parameters allow you to set default values for function parameters if no value or undefined is passed when the function is called. This feature is particularly useful for creating more flexible and robust functions without needing to manually check for undefined values inside the function.
*/

function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
  }
  
  greet(); // Output: Hello, Guest!
  greet('Alice'); // Output: Hello, Alice!