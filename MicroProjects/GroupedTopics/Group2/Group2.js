/*
Micro JavaScript Application: Comprehensive Overview
Objective:
Create a JavaScript application that covers various fundamental and advanced concepts including control flow, loops, functions, and advanced function features.

Topics Covered:
Control Flow:
- Conditional statements (if, else if, else)
- Switch statements
- Ternary operator

Loops:
- for, while, do-while loops
- Loop control (break, continue)

Functions:
- Declaration and invocation
- Parameters and arguments
- Return statements

Advanced Functions:
- Arrow functions
- Rest and spread operators (...)
- Default parameters

Additional Concepts:
- Anonymous functions (function expressions)
- Closures
- IIFE (Immediately Invoked Function Expressions)
*/

// Function to determine ticket price based on age

function determineTicketPrice(age){
    let price = 0;

    if(age < 18){
        price = 10;
    }
    else if( age >= 18 && age <= 64){
        price = 20;
    }
    else{
        price = 15; // senior price
    }

    return price;
}

// Switch statement to determine day of the week

function getDayOfWeek(dayIndex){
    let dayName = "";
    switch(dayIndex){
        case 0:
            dayName = "Sunday";
            break;
        case 1: 
        dayName = "Monday";
        break;
        case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day";
}
return dayName;
    }

    // Ternary operator example to determine if a number is even or odd
    function checkEvenOrOdd(num){
        return num % 2 === 0 ? "Even" : "Odd";
    }

    // Loops: for, while, do-while, Loop control (break, continue)

    function printNumbers(n){
        for(let i = 1; i <= n; i++){
            if(i == 5){
                break;
            }
            console.log(i);
        }

        let j = 1;
        while(j <= n){
            if(j === 3){
                j++; // skip printing 3 using continue
                continue
            }
            j++;
        }

        let k = 1;
        do {
            k++;
        } while (k <= n && k !== 4); // Stop when k is 4

    }
    
// Functions: Declaration and invocation, Parameters and arguments, Return statements
function addNumber(num1, num2){
    const total = num1 + num2;
    return total;
}

addNumber(1,5);

// Advanced Functions: Arrow Functions, Rest and spread operators, default parameters


// Default parameters
const subtractNumber = (num1 = 10, num2) => {
    const total = num1 - num2;
    return total;
}

subtractNumber(undefined, 7);

// Spread operator usage
const evenNumbers = [2,4,6,8];

const multiplyEvenNumbers = (...numbers) => {
    return numbers.map(number => number * 10);
}

const multipliedNumbers = multiplyEvenNumbers(...evenNumbers);

//Anonymous function
const greet = function(){
    console.log("Hell, world!")
}

greet();

//Anonymous function used as a callback
const numbers = [1,4,5,6];
const doubled = numbers.map(function(num){
    return num * 2;
})

// Closures


function createCounter(){

    let count = 0; // this variable is in outer scope

    return function(){
        count++; // this inner function has access to count
    }
}

const counter = createCounter();

/*
An IIFE is a function that is executed immediately after it is defined. It is a common JavaScript pattern used to create a new scope and avoid polluting the global scope.
*/

(function(){
    const message = "I'm defined straight away!"
})(); // The parentheses at the end invoke the function immediately