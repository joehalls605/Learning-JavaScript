// Data Types and Variables

// Using 'let' for variables that may change
// 'let' is used for variables whose values might change over time. It has block scope.
let name = "John";        // String variable
let letIsAdult = true;    // Boolean variable
let a = 5;                // Number variable
let b = 3;                // Number variable
let sum = a + b;          // Performing arithmetic operation with 'let' variables
let isGreaterThan = a > b;   // Comparing numbers with 'let' variables
let logicalAnd = (a > 0) && (b > 0);  // Using logical AND with 'let' variables

let score = 85;    // Updating the score using 'let'

// Using 'const' for variables that should not be reassigned
// 'const' is used for variables that cannot be reassigned once they have been initialized.
const age = 25;             // Constant age, cannot be reassigned
const nullVariable = null;  // Constant null variable, cannot be reassigned

/*
* var is an older way to declare variables in JavaScript
* var uses function scope, which means variables declared with var are scoped to the function in which they are defined.
* If declared outside a function, var creates a global variable.
* It is hoisted, so it throws an error if accessed before declaration
*/

var catName = "Phil";  // Declaring a variable with 'var'

function test() {
    var x = 10; // Scoped to the function
}
console.log(x); // ReferenceError: x is not defined, because x is function-scoped
