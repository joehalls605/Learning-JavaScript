// Basic Syntax

() => console.log("Hello world");

// this is equivleant to:

function test(){
    console.log("Hello World");
}

// When a function takes a single parameter, parentheses around the parameter can be removed

param => console.log(param);

// this is equivleant to:

function test(param) {
    console.log(param);
}

// Multiple parameters.
// When multiple parameters are used, parentheses are required:

(param1, param2) => {
    console.log(param1, param2)
}

// This is the same as
function test (param1, param2) {
    console.log(param1, param2);
}

// Returning a value
// If the function body consists of a single expression, the expressions value is returned by default

param => param * 2;

// this is equivleant to:
function(param) {
    return param * 2;
}

// For multiple statements, use curly braces and the return keyword:

(param1, param2) => {
    let result = param1 + param2;
    return result;
};

// // this is equivleant to:
function test(param1, param2) {
    let result = param1 + param2;
    return result;
}


// Arrow functions are often used inline, in event handlers or as arguments to other functions

document.addEventListener("Click", () => console.log("Clicked"))

const numbers = [1,2,3,4];
const doubled = numbers.map(num => num *2);

// Returning an object lieral

const getUser = () => ({name: "John", age: 30})

// // this is equivleant to:
function getUser() {
    return { name: "John", age: 30 };
}

// Arrow functions in loops

const numbers2 = [1, 2, 3, 4, 5];

const doubled2 = numbers2.map(num => num *2);

const even = numbers2.filter(num => num % 2 === 0)

const sum = numbers2.reduce((acc, num) => acc + num, 0);


// Arrow functions for this keyword

/*
One significant difference between arrow functions and regular functions is how they handle this. Arrow functions do not have their own this context; they inherit this from the parent scope where they are defined. 
This makes them particularly useful in situations where you want to preserve the context of this:
*/

function Timer(){
    this.seconds = 0;

    setInterval(()=>{
        this.seconds ++;
        console.log(this.seconds);
    }, 1000)
}

const timer = new Timer();