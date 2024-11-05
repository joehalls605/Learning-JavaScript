/*
The slice() method in JavaScript is used to extract a portion of a string or array.

slice(startIndex, endIndex) extracts a section of a string from the startIndex up to, but not including, the endIndex. 
If endIndex is omitted, it will slice to the end of the string.
*/

let text = "Hello, world!";
let slicedText = text.slice(2,5);


let phrase = "JavaScript is cool";
let slicedPhrase = phrase.slice(11); // Slices from index 11 to the end

let message = "Welcome to JavaScript all people!";
let lastPart = message.slice(-9); // Slices the last 9 characters, starting from the end and moving backward.

let colours = "Red, Blue, Green";
let selectedColours = colours.slice(-4, -1);

// Working with arrays

let fruits = ["Apple", "Cherry", "Pear"];
let selectedFruits = fruits.slice(1,4);