/*
Functional programming is a way to write software by using functions. 
Functional programming focusses on the what, not the how. It is a paradigm within declarative programming.


Here are the key ideas:

Pure Functions:
A pure function always gives the same output if you give it the same input.
It doesn’t change anything outside itself (no side effects).

Immutability:
Data doesn’t change. Instead of changing existing data, you create new data with the changes.
Repeat - instead of changing EXISTING data, you create new data with the changes.

First-Class Functions:
Functions are treated like any other value. You can pass them as arguments to other functions, return them from functions, and assign them to variables.

Higher-Order Functions:
Functions that take other functions as arguments or return them as results. Examples include map, filter, and reduce.
*/

// Pure function
function add(a, b) {
    return a + b;
}

// Calling the function with the same inputs will always give the same output
console.log(add(2, 3)); // 5

// Instead of changing the original array, create a new one
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]; // [1, 2, 3, 4]

// Function passed as an argument
const numbers2 = [1, 2, 3];
const doubled = numbers2.map(function(x) {
    return x * 2;
});
console.log(doubled); // [2, 4, 6]

/*
Benefits
Easier to Understand: Code is often more readable and predictable.
Easier to Test: Pure functions are easier to test because they don't depend on external state.
Avoiding Bugs: Immutability helps avoid bugs related to changing data.
*/
