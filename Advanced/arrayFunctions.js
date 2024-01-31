// Array Functions

// Filter()

/*In Javascript, the filter() method is used to create a new array containing elements from the original array that meet a condition.
The filter methhod expects a function as an arugment, so I can use an arrow function.
*/

const colours1 = ["red", "blue", "green"];
const filteredColours = colours1.filter(colour => colour === "red");

/*colour represents each element being iterated over, => seperates the parameter from the function body.
colour === "red" is the comparison.
*/

/* Find() is used to retrieve the first element in the array that satisfies a condition.
Find accepts three arguments, element, index and array.
element - the current element being processed,
index - the index of the current element being processed
array - the array on which find() is being called
*/

// Array of numbers
const numbers = [10, 20, 30, 40, 50];

// Using find() to get the first element greater than 25
const result = numbers.find(number => number > 25);

console.log(result); // Output: 30


// Array of objects representing users
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' }
];

// Using find() to get the user with id 3
// element - user
// index - index
// array - array

const result2 = users.find((user, index, array) => {
    console.log(`Processing element at index ${index}`);
    console.log(`Current element:`, user);
    console.log(`Original array:`, array);
    return user.id === 3;
});

console.log(result2); // Output: { id: 3, name: 'Charlie' }


//Map()

/*
Transforms each element of an array according to a provided function and returns a new array with the results.
It's used to perform operations on each element of an array, without mutating the original array.
*/

const numbers1 = [1, 2, 3, 4, 5];
const doubledNumbers = numbers1.map(number => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


//forEach()
/*
forEach, doesn't return a new array, but iterates over each element of the array and executes a provided function for each element.
*/

const names = ['Alice', 'Bob', 'Charlie'];
names.forEach(name => console.log(name));
// Output:
// Alice
// Bob
// Charlie


//Reduce()
/*
This method is like having a running tally while you go through a list of numbers.
It uses an accumulator(a starting value) which is often set to 0.
It then goes through each number in the array and performs an action
Then after each operation, the result is stored into the accumulator
By the edn of the operation you're left with a single value which is the result of the reduce() function
*/

const numbers3 = [1, 2, 3, 4, 5];

// Starting with an accumulator (sum) set to 0
const sum = numbers3.reduce((accumulator, currentValue) => {
    // Adding the current number to the accumulator
    return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15 (result of adding all the numbers together)

