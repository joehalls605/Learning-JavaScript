// JavaScript Code Assessment

// 1. What is JavaScript?
// Answer: Explain what JavaScript is and its primary use cases.

/* 
JavaScript is a programming language commonly used to make web pages interactive. It can be used to create things like dynamic content, animations, and form validations.
*/

// 2. Main features of JavaScript
// Answer: List and briefly describe three main features of JavaScript.

/*
1. It has Dynamic typing, meaning that variables do not require a predefined type, and the variable can change during execution.

2. It uses event driven programming for web development, this could be events like clicks, keypresses or mouse movements.
JavaScript provides event handlers for these events to make the web pages interactive.

3. It uses prototypal inheritance, instead of classical inheritance which is common in other object oriented languages.
This means that the objects can inherit properties and methods from other objects. Every JavaScript object has a prototype.

I would also like to add that JavaScript uses Just In Time (JIT) Compilation. The JavaScript code is interpreted into machine code just before execution, meaning that this can be executed faster than interpreted code.
*/

// 3. Differences between JavaScript and Java
// Answer: Highlight three key differences between JavaScript and Java.

/*
1. JavaScript is dynamically typed, meaning the variable types are determined at runtime and can change.
2. Java is Statically styped, meaning that variables are explicitly declared and checked at compile time. Once a variable is declared to be of a certain type, it cannot hold values of other types.
3. Execution enviroment: JavaScript typically runs in web browsers and is interpreted using engines like V8 in Chrome or server enviroments like NODE.JS
Where as Java applications run on any device that has JVM installed, whether it is a server, desktop or mobile device.
*/

// 4. Events in JavaScript
// Answer: Describe how event handling works in JavaScript with an example.

/*
In JavaScript event handling works by a user interacting with an element on the page, this could be a click or a scroll, 
that triggers an event and initiates and event handler to do some form of action.
For example, the user clicks the submit button on a form which triggers a click event, this click event then makes a request to the server to pass that information from the form on.
*/

// 5. Differences between ES5 and ES6
// Answer: Name and explain three significant differences between ES5 and ES6.

/*
ES5 uses var for variable declarations, which has function scope and can lead to issues with variable hoisting.
ES6 introduces let and const for variable declarations which have block scope. 
ES6 introduces arrow functions with a shorter syntax and lexical this binding, making them more concise and intuative.
*/

// 6. What is an expression?
// Answer: Define what an expression is in JavaScript and provide an example.

// An expression in programming is a a piece of code that evaluates to a value.

// Variables and Data Types

// 7. Declaration (var, let, const)
// Question: Declare a variable using var, let, and const. Explain the differences between them.
// Answer:

/*
var has function scope, meaning is is accessible throughout the entire function is declared in.
let can be reassigned after being declared, let has block scope meaning it is only accessible within the code block.
const cannot be reassigned after being declared and it must be initialised at the time of declaration.
const also has block scope.
*/

// 8. Data types (string, number, boolean)
// Question: Create a variable of each data type: string, number, and boolean. Show examples of each.
// Answer:

let name = "Joe";
const number = 12;
let isTrue = true;

// 9. Type conversion (implicit and explicit)
// Question: Provide an example of implicit and explicit type conversion.
// Answer:

// Implicitly converts number to string
let result1 = 5 + "5";

// Explicit Type Conversion (Casting)
let str = "123";
let num = Number(str);


// 10. !! operator
// Question: Explain what the !! operator does in JavaScript and give an example.
// Answer:

let value = "Hello";

// Convert to boolean using !!
let result = !!value;

// 11. Objects and Object literals
// Question: Create an object using object literals with at least three properties and one method.
// Answer:

const dog = {name: Fizz, age: 3, bark: function(){
    console.log(`I'm a dog called ${this.name}`);
}}

// 12. Operator precedence
// Question: Provide an example that demonstrates operator precedence in JavaScript.
// Answer:

const output = 5 + 3 * 2;
console.log(output); // 11

// 13. Operators (arithmetic, comparison, logical, assignment)
// Question: Show examples of each type of operator (arithmetic, comparison, logical, assignment).
// Answer:

let a = 10;
let b = 5;

console.log(a + b);
console.log(a % b);
console.log(a !== b);

// Control Flow

// 14. Conditional statements (if, else if, else)
// Question: Write a function that uses if, else if, and else statements to categorize a number as positive, negative, or zero.
// Answer:

const v = 10;

if(v < 0){
    console.log("v is negative");
}
else if(v == 0){
    console.log("v is zero");
}
else{
    console.log("v is positive");
}

// 15. Switch statements
// Question: Write a function that uses a switch statement to print the name of the day based on the day number (1-7).
// Answer:

dayNum = 7;

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day number. Please enter a number between 1 and 7.");
    }
}

// Example usage:
getDayName(3); // Outputs: Wednesday
getDayName(8); // Outputs: Invalid day number. Please enter a number between 1 and 7.


// 16. Ternary operator
// Question: Rewrite the following if-else statement using the ternary operator:
// ```
// if (age >= 18) {
//   canVote = true;
// } else {
//   canVote = false;
// }
// ```
// Answer:


const canVote = (age >= 18) ? true : false; // (CONDITION) ? OUTPUT : OUTPUT


// 17. Loops (for, while, do-while)
// Question: Write examples of a for loop, while loop, and do-while loop that each print numbers from 1 to 5.
// Answer:

for(i = 1; i <= 5; i++){
    console.log(i);
}

let i = 1;
while(i <= 5){
    console.log(i);
    i++;
}

let x = 1;
do{
    console.log(x);
    x++;
}
while(x <= 5);

// 18. Loop control statements (break, continue)
// Question: Write a loop that prints numbers from 1 to 10 but skips the number 5 and stops the loop when it reaches 8.
// Answer:

for(let i = 1; i <= 10; i++){
    if( i === 5){
        continue;
    }
    if(i === 8){
        break;
    }
    console.log(i);
}


// Functions

// 19. Declaration, invocation
// Question: Declare a function named greet and invoke it.
// Answer:

function greet(){
    console.log("Hi!");
}

greet();

// 20. Parameters and arguments
// Question: Write a function that takes two parameters and returns their sum. Invoke the function with arguments 5 and 3.
// Answer:

function sum(a, b){
    const total = a + b;
    return total;
}

sum(5, 3);

// 21. Return statements
// Question: Write a function that returns the square of a number.
// Answer:

function square(number){
    return number * number;
}

const result2 = square(5);
console.log(result);

// 22. Anonymous functions (function expressions)
// Question: Assign an anonymous function to a variable that multiplies two numbers and returns the result. Invoke this function.
// Answer:

const anonymous = function(a,b){
    const total = a  * b;
    return total;
}

anonymous();

// 23. Immediately Invoked Function Expressions (IIFE)
// Question: Write an IIFE that logs "Hello, World!" to the console.
// Answer:

(
    function helloWorld() {
        console.log("Hello, World!");
    }
)();
// Advanced Functions

// 24. Arrow functions
// Question: Rewrite the following function as an arrow function:
// ```
// function add(a, b) {
//   return a + b;
// }
// ```
// Answer:

const add = (a, b) => {
    return a + b;
}

// Simplified further:

const add2 = (a,b) => a + b;

// 25. Rest operators
// Question: Write a function that uses the rest operator to accept any number of arguments and returns their sum.
// Answer:

function sumAll(...args){
    const sum = args.reduce((total, num) => total + num, 0);
    return sum;
}

console.log(sumAll(1, 2, 3, 4, 5));

// 26. Spread operator
// Question: Use the spread operator to combine two arrays into one.
// Answer:

let arrayOne = [1,2,3];
let arrayTwo = [3,4,5];

const combined = [...arrayOne, ...arrayTwo]

function greeting(name = "Guest") {
    return `Hello ${name}`;
}

// Example usage
console.log(greeting("Joe")); 
console.log(greeting());       


// 28. Higher-order functions
// Question: Write a higher-order function that takes a function as an argument and invokes it.
// Answer:

function invokeFunction(fn){
    fn();
}

invokeFunction(sayHello);


// 29. .bind()
// Question: Explain what the .bind() method does and provide an example of its use.
// Answer:

/*
.bind() in JavaScript creates a new function, that when called has its this keyword set to a specific value.
and optionally pre-defined arguments, this is useful for ensuring that a function retains the correct this context when invoked later.

Key points:
The bind method sets the this value for the function
Predefines arguments that the function will use.
*/

const person = {
    name: "Alice",
    greet: function(){
        console.log(`Hello my name is${this.name}`);
    }
};

// Create a new function with `this` bound to the `person`
const greetAlice = person.greet.bind(person);

// The reason .bind is used, is that when you pass a method as a callback, the this context might be lost.
// .bind() ensure that this is correctly bound to the original object/

// Data Structures

// 30. Based on the problem, what method would I use?
// Question: Given an array of numbers, which method would you use to find the largest number? Provide an example.
// Answer:

const numbers = [1,2,3,4];

const largestNumber = Math.max(...numbers);

console.log(largestNumber);

// 31. Arrays (declaration, manipulation, methods)
// Question: Declare an array of numbers, add a number to the end, and remove a number from the beginning. 
// Show the final array.
// Answer:

const numbers3 = [1,6,7,8];

numbers3.push(7);
numbers3.unshift();

console.log(numbers3);

// 32. Multidimensional and 3D arrays
// Question: Create a 2D array (3x3 matrix) and a 3D array (2x2x2 matrix). Access an element from each.
// Answer:

// IGNORED FOR TIME BEING.

// 33. map
// Question: Use the map method to create a new array that contains the squares of all elements in the original array [1, 2, 3, 4].
// Answer:

const squaredNumbers = numbers3.map(function(num){
    return num * num;
})

// 34. reduce
// Question: Use the reduce method to sum all elements in the array [1, 2, 3, 4].
// Answer:

const sumNumbers = numbers3.reduce((total, num) => total + num, 0);

// 35. slice
// Question: Use the slice method to create a new array from the first three elements of the array [1, 2, 3, 4, 5].
// Answer:

const newArray = numbers3.slice(0,3);

// 36. includes
// Question: Use the includes method to check if the array [1, 2, 3, 4, 5] contains the number 3.
// Answer:

const includesNum = numbers3.includes(3);

// 37. valueOf
// Question: Explain what the valueOf method does in JavaScript with an example.
// Answer:

/*
The valueOf method in JavaScript returns the primitive value of an object. It is a method that can be used on objects to retrieve their underlying primitive value.
*/

const numObj = new Number(42); // Create a Number object

console.log(numObj.valueOf()); // Outputs: 42
console.log(numObj + 8);        // Outputs: 50 (numObj is converted to its primitive value 42 for the addition)


// 38. filter
// Question: Use the filter method to create a new array with only even numbers from the array [1, 2, 3, 4, 5].
// Answer:

const filteredArray = numbers.filter(function(num) {
    return num % 2 === 0; // Return true for even numbers
});

// 39. find
// Question: Use the find method to locate the first even number in the array [1, 2, 3, 4, 5].
// Answer:

const firstEvenNumber = numbers.find(function(num){
    return num % 2 === 0;
});

// 40. forEach
// Question: Use the forEach method to print each element of the array [1, 2, 3, 4, 5].
// Answer:

numbers.forEach(num => {
    console.log(num);
});

// 41. pop
// Question: Demonstrate the use of the pop method by removing the last element from the array [1, 2, 3, 4, 5].
// Answer:

const lastElementPopped = numbers.pop();

// 42. push
// Question: Demonstrate the use of the push method by adding an element to the array [1, 2, 3, 4, 5].
// Answer:

const pushElement = numbers.push(6);

// 43. sort
// Question: Use the sort method to sort the array [5, 2, 4, 1, 3] in ascending order.
// Answer:

const sortArray = numbers.sort();

// 44. comparator function
// Question: Write a comparator function to sort the array of objects [{name: 'John', age: 25}, {name: 'Jane', age: 22}, {name: 'Doe', age: 28}] by age.
// Answer:

// STUCK

// 45. shift
// Question: Demonstrate the use of the shift method by removing the first element from the array [1, 2, 3

const removeFirstElement = numbers.shift();