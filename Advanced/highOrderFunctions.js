/*
A higher-order function is a function that does at least one of the following:

Takes one or more functions as arguments (input).
Returns a function as its result (output).

Why Use Higher-Order Functions?
Reusability: They allow you to write more reusable and modular code.
Abstraction: They help abstract away common patterns, making your code cleaner and more readable.

Example of Higher-Order Function:
A Function that Takes Another Function as an Argument
Example: an array map method
*/

const numbers = [2,3,5,6];

const doubled = numbers.map(num => num * 2);

// Example: a function that generates a a multiplier

function createMultiplier(multiplier){
    return function(number){
        return number * multiplier;
    }
}

const double = createMultiplier(2);
const triple = createMultiplier(3);