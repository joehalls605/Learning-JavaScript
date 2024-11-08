/*
Declarative Programming in JavaScript
In declarative programming, we focus on what we want, not how to get there. JavaScript's filter method is a great example, as it allows us to "declare" the condition without manually iterating through the array.
*/

const numbers = [1,2,3,4,5,6,7];
const evenNumbers = numbers.filter((n => n % 2 == 0));

/*
Here, we’re declaring our intention: “Filter the numbers to get only the even ones.” The filter function handles the iteration and conditional check behind the scenes.

Comparing this to other methods:

In imperative programming, we explicitly outline the steps needed to accomplish the task. 
Here’s the same even-number filtering task done imperatively:
*/

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers2 = [];

for (let i = 0; i < numbers2.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers2.push(numbers[i]);
    }
}

console.log(evenNumbers2); // Output: [2, 4, 6, 8, 10]

/*
In this version, we manually set up a for loop to iterate through each element in numbers, check if it’s even, and push it to evenNumbers if it is. We’re defining the step-by-step how here: iterating, checking, and pushing.

Functional programming often overlaps with declarative programming because it uses high-order functions and aims to avoid changing state. Here, filter is also a functional programming tool, as it takes a function (predicate) and returns a new array without changing the original array.
*/

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isEven = n => n % 2 === 0; // A pure function
const evenNumbers3 = numbers.filter(isEven);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// A pure function is a function, that given the same input, will always return the same output and has no side effect.


