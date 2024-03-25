/* The spread syntax in JavaScript is a way to work with arrays and objects more flexibly. 
It lets you take an array and break it into individual elements, or merge multiple arrays or objects together. 
You can use it to pass multiple values as separate arguments to a function, 
which is handy because functions usually expect arguments one by one. So, instead of passing an entire array to a function, 
you can use spread syntax to pass each element of the array as a separate argument. 
This makes your code more concise and easier to work with. 

Essentially,i it allows an iterable to be expanded into seperate elements / unpack the elements.
*/

let nums = [1,3,4,5];
// let maximum = Math.max(numbers); // this would output nan.
let maximum = Math.max(...numbers); // so by using the spread, you're opening the box and unpacking the array.

let usersame = "Joseph";
let letters = [...usersame]; // "J" "o" "s" etc

// creating a shallow copy

let fruits = ["apple", "pear", "orange"];
let vegetables = ["carrot", "onion"]
let food = [...fruits, ...vegetables]; // unpacks them and adds to food. This shows individual elements.
// If I did not use spread operator, it would create a nested array.


const numbers = [1,2,3];
console.log(...numbers);

const arr0 = [1,2,3];
const arr3 = [4,5,6];

const conactenatedArray = [...arr0, ...arr3];

function sum(...numbers){
    return numbers.reduce((total, num) => total + num, 0);
}

/*
 The reduce method is called on the numbers array. It takes a callback function and an initial value (0 in this case). 
 The callback function receives two parameters: total (the accumulated result) and num (the current element being processed).
*/

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result);

// Spread syntax in arrays

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);

/*
In this example, 
the spread syntax (...arr1 and ...arr2) is used to spread the elements of arr1 and arr2 into a new array called combinedArray.
*/

//Spread syntax in objects

const person = {name: "John", age:30};
const details = {job: "Software Dev", city:"London"};

const combinedDetails = {...person, ...details};

console.log(combinedDetails);
