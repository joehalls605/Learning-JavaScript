// CLOSURES

/*
A closure is a javascript feature that allows a function to remember and access its lexical scope (retains access to variables and parameters in the enviroment where it was created), 
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

function outerFunction(outerVariable){

    return function innerFunction(innerVariable){
        console.log("Outer variable", outerVariable);
        console.log("Inner variable", innerVariable);
    }
}

const newFunction = outerFunction("outside");
newFunction("inside");


function multiplier(factor){
    return function(number){
        return number * factor; // factor is remembered by the inner function
    };
}

// The returned function from the multiplier is a closure because it remembers the value of factor whe it is invoked

const multiplyByTwo = multiplier(2);


// More practice

function greet(name){
    return function(){
        console.log("Hello" + name + "!");
    };
}
const sayHelloToJohn = greet("John");
sayHelloToJohn();
// Even when greet is done, the returned function still knows name


function createCounter(){
    let count = 0;

    return function(){
        count++;
        console.log(count);
    }
}


const counter = createCounter();
counter();
counter();
counter();

function secretMessage(msg){
    return function(){
        console.log("The secret is" + msg);
    };
}

const revealSecret = secretMessage(" I love JavaScript");
revealSecret();
revealSecret();

// A tricky one to note:

function outer() {
    let message = "Hello, world!";

    return function inner() {
        console.log(message);
    };
}

const innerFunc = outer();
outer();  // What will this print?

// Nothing gets printed! this is because the inner function is returned, not invoked!



// More practice

function createCounter(start){
    let count = start;

    return function(){
        count++;
        console.log(count);
    }
}

const myCounter = createCounter();
myCounter(); //1
myCounter(); //2
myCounter(); //3

function outer(){
    let secret = "I'm a secret";

    return function inner(){
        console.log(secret);
    }
}

const myFunc = outer();
myFunc();


function createNumber(){
    let total = 0;

    function inner(){
        return total += 1;
    }
    return inner;
}

const number  = createNumber();
number();
number();
number();

