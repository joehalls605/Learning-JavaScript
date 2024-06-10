/*
Passing functions as arguments is a common practice in JavaScript that allows you to make your code more flexible and reusable. Here’s a simple explanation with an example.

What It Means to Pass Functions as Arguments:
In JavaScript, functions are first-class objects, which means they can be passed around just like any other value (such as numbers or strings).
You can pass a function as an argument to another function. The function that receives the function argument is often referred to as a "higher-order function."

Why Use Functions as Arguments:
Flexibility: You can change the behavior of a function by passing different functions as arguments.
Reusability: You can create generic functions that perform common tasks and customize their behavior with different function arguments.
Abstraction: It helps in abstracting away details, making code easier to understand and maintain.

Imagine you have an array of numbers, and you want to create a function that processes each number in a specific way (e.g., doubling, squaring).
*/

const double = number => number * 2;
const square = number => number * number;


/*
This function will take an array and a function as arguments and apply the function to each element in the array.
*/
const processArray = (arr, fn) => {
    return arr.map(fn);
  };
  
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = processArray(numbers, double);
const squaredNumbers = processArray(numbers, square);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
  