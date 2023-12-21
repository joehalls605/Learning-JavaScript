// CLOSURES

/*
A closure is a javascript feature that allows a function to remember and access its lexical scope, even wehn the function is executed outside that scope.

Simply, a closure is created when a function is defined inside another funciton, and the inner function retains
acess to variables and parameters of the outer function. Even after the outer function has finished.s

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