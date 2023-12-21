// MODULES


/* say we have two JavaScript files, main.js and module.js.
*/

// module.js

// Exporting a variable
export const greeting = "Hello";

// Exporting a function
export function sayHello(name) {
  return `${greeting}, ${name}!`;
}

// main.js

// Importing the module
import { greeting, sayHello } from './module.js';

// Using the exported variable
console.log(greeting); // Output: Hello

// Using the exported function
const message = sayHello("John");
console.log(message); // Output: Hello, John!
