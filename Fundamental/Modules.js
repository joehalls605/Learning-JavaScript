/* MODULES
JavaScript modules are reusable pieces of code that can be exported from one file and imported into another. They help organize code into smaller, manageable chunks, making it easier to maintain and reuse.

Modules export functionality using the export keyword. You can export variables, functions, classes, or even entire objects.
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
