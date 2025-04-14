let fruits = ["apple", "banana", "cherry", "date"];

// removing with .splice
let removed = fruits.splice(1,2); // ["apple", "date"] // starts at index 1
// splice modifies the original array

// adding with .splice
fruits.splice(1,1, "orange", "pear");

// replacing with .splice
fruits.splice(1, 1, "fig", "tomato");
