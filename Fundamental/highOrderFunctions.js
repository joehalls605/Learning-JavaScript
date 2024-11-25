/*
High-order functions in JavaScript (or any programming language) are simply functions that do one of two things:

Take other functions as arguments
Return a function as their result
Why Use Higher-Order Functions?
They’re useful because they let us write more flexible and reusable code. 
Instead of hard-coding everything, you can use high-order functions to create "templates" of behavior, 
then customise that behavior by passing in specific functions.
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