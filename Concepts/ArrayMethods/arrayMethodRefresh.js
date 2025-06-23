// Map - Creates a new array by transforming each element
let numbers= [1,2,3];
let doubled = numbers.map(num => num * 2);
let doubled2 = numbers.map(function(num){
    return num * 2;
});
let doubled3 = numbers.map(num => {
    return num * 2;
})

// forEach - Executes a function for each item, but does not return a new array
let names = ["Alice", "Bob", "Charlie"];
names.forEach(name => console.log(`Hello ${name}`));
names.forEach(name => {
    console.log("Hello, " + name);
});

// reduce - reduces the array into a single value
let prices = [10,20,30];
let total = prices.reduce((acc, price) => {
    return acc + price;
}, 0);

// slice - returns a portion of the array without changing the original
let animals = ["cat", "dog", "rabbit", "horse"];
let someAnimals = animals.slice(1,3); // up to but not including 3.

// filter - returns a new array with items that pass a condition
let scores = [85, 42, 90, 65];
let passing = scores.filter(score => score >= 60);

// find - finds the first value that matches a condition
let people = ["Tom", "Jane", "Sarah"];
let result = people.find(person => person.startsWith("S"));
console.log(result);

// pop - removes the last item from the array
let colours = ["pink", "blue", "yellow"];
colours.pop();

// push - adds an item to the end of the array
let dogs = ["spaniel", "lab"];
colours.push("pug");

// sort - sorts the array in place, but by default it sorts as strings
let nums = [10, 2, 30];
nums.sort(); // sorts as strings
console.log(nums); // [10, 2, 30] → actually becomes [10, 2, 30] because "10" < "2"

// to fix this I use the comparator function
let nums = [10,2,30];
nums.sort((a,b) => a - b); // ascending
console.log(nums); // [2, 10, 30]

/*
*  Comparator function - how it works
*  if a is negative number, a comes before b
*  if 0, they stay in the same position, relative order
*  if a is a positive number, a comes after b
* */

// Descending
nums.sort((a,b) => b - a); // ascending

// shift - removes the first item
let cities = ["Paris", "London", "Rome"];
cities.shift();

// unshift - adds one or more items to the start of the array
cities.unshift("Paris");















