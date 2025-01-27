/*
The `.forEach()` method in JavaScript is used to **loop through an array** and perform an operation on each element.

**It doesn't return a new array** (unlike `.map()`). It simply **iterates** through the array and executes a function on each element.

The function you provide to `.forEach()` will be called once for each element in the array.
You can use that function to do something (like logging, modifying variables, etc.) with each element.

It's not chainable, meaning you can't call other array methods (like `.filter()`) directly after `.forEach()` on the same line, because `.forEach()` always returns `undefined`.

 */

array.forEach((element, index, array) => {
    // code here
});

/*
`element`: The current item being processed in the array.
`index` (optional): The index of the current item in the array.
`array` (optional): The entire array that `.forEach()` is being called on.
 */

const numbers = [1,3,4,5,6];
numbers.forEach(num => {
    console.log(num);
})

// Using index

const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, index) => {
    console.log(`${index + 1} + ${fruit}`)
});

// Modifying a variable

const numbers = [1,2,3];
let sum = 0;

numbers.forEach(num => {
 sum += num;
})

