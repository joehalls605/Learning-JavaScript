// CLOSURES

/*
A closure is a javascript feature that allows a function to remember and access its lexical scope, 
even when the function is executed outside that scope.

Simply, a closure is created when a function is defined inside another funciton, and the inner function retains
access to variables and parameters of the outer function. Even after the outer function has finished.

*/

function outerFunction(){
    
    const outerVariable = "I'm in the outer function"

    function innerFunction(){
            // Inner function scope has access to outer function variables
        console.log(outerVariable);
    }

    // Return the inner function, creating a closure
    return innerFunction;
}

// Call outerFunction and store the returned inner function
const closureExample = outerFunction();

closureExample(); // Output: I'm from the outer function!


/*
When to Use Closures:
Encapsulation and Data Privacy:
When you want to hide certain variables and make them accessible only through specific functions.
Example: You want to keep a variable private but allow controlled access or modification.

Maintaining State:
When you need to keep track of a value that should persist across multiple function calls.
Example: Implementing a counter that increments every time a function is called.

Callback Functions:
When working with asynchronous code, like event handlers or setTimeout/setInterval, to remember the state at the time the function was created.
Example: Storing the value of a variable when setting a delay for an operation.
*/


// More practice
// This is one giant closure
let myName = "Joe";

function printName(){
    console.log("myName");
}

myName = "John"; // printname would actually be John, even though it's assigned below. Most recent value of the variable.

printName();


function outerFunction(outerVariable){
    return function innerFunction(innerVariable){
        console.log("Outer variable", outerVariable);
        console.log("Inner variable", innerVariable);
    }
}

const newFunction = outerFunction("outside");
newFunction("inside");