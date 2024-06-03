// A closure is a function that remembers the enviroment (scope) in which it was created, even after the enviroment no longer exits

function outerFunction() {
    let outerVariable = "I'm from outer";

    function innerFunction() {
        console.log(outerVariable); // Can access outerVariable
    }

    return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Logs: "I'm from outer"

/*
In summary:

Scope determines where variables are accessible.
Lexical scope means the scope is defined by the physical placement of the code.
Closures are functions that "close over" their lexical scope, maintaining access 
- to variables from their defining scope even after that scope has finished executing.


*/