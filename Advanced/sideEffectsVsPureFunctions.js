/*
In programming, a side effect occurs when a function interacts with or changes something outside its own local scope.

This can include:
- Modifying a global variable
- Change the state of an object
- Interacting with external systems (logging to console, updating the dom, making API calls)

Pure Functions vs. Functions With Side Effects

A pure function is a function that:
- always produces the same output for the same input.
- does not modify anything outside its scope (no side effect)

A function with side effects performs operations that go beyond just returning a result.

Simple examples
*/

// Pure Function (No Side Effects):
// This function calculates the square of a number without affecting anything else:

function square(number){
    return number * number;
}

console.log(square(4)); // Always returns 16, no side effects.


// Function with side effects:

function logSquare(number){
    console.log(number * number); // Logs output to the console (side effect)
}
logSquare(4); // Logs 16, doesn't return anything


/*
Key differences

Pure functions:
Always returns the same result for the same input.
No impact outside the function's scope.
Easier to debug due to predictability.

Functions with side effects:
May produce different results depending on external factors.
Can modify external state or interact with systems.
Harder to debug due to external dependencies.
*/
