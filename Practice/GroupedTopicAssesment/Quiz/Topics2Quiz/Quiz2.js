// 1. Declaration and Invocation
// Write a function named `greet` that takes no parameters and prints "Hello, World!" to the console.
// Then, invoke the function.

function greet(){
    console.log("Hello, World!");
}
greet();


// 2. Parameters and Arguments
// Write a function named `add` that takes two parameters and returns their sum.
// Invoke the function with the arguments 5 and 7, and store the result in a variable named `result`.


function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

var result = add(5,7);

// 3. Return Statements
// Write a function named `square` that takes one parameter and returns its square.

function square(num){
    const squared = num * num;
    return squared;
}


// 4. Anonymous Functions (Function Expressions)
// Create an anonymous function that takes a string parameter and logs it to the console.
// Assign this function to a variable named `logMessage`, and then call it with the argument "Hello".

const logMessage = function(param){
    console.log(param);
}
logMessage("hello");


// 5. Immediately Invoked Function Expressions (IIFE)
// Write an IIFE that logs "IIFE executed" to the console.

(
    function(){
        console.log("IIFE executed");
    }
)();


// 6. Arrow Functions
// Write an arrow function named `multiply` that takes two parameters and returns their product.
// Then, invoke the function with the arguments 3 and 4.

const multiply = (num1, num2) => num1 * num2;

// 7. Rest and Spread Operators
// Write a function named `sumAll` that takes any number of arguments and returns their sum using the rest operator.

function sumAll(...args){
    return args.reduce((acc, curr) => acc + curr, 0)
}


// 8. Default Parameters
// Write a function named `greetPerson` that takes one parameter `name` with a default value of "Guest".
// The function should return a string "Hello, `name`".

function greetPerson(name = "Guest"){
    return `Hello, ${name}`;
}
console.log(greetPerson());

// 9. Higher-Order Functions
// Write a higher-order function named `operate` that takes two numbers and a function as arguments.
// The `operate` function should call the passed function with the two numbers and return the result.

function operate(num1, num2, fn){
    result = fn(num1, num2);
    return result;
}

