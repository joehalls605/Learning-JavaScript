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