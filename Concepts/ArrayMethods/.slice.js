// The slice() method in JavaScript is used to extract a portion of a string or array.

// slice(startIndex, endIndex) extracts a section of a string from the startIndex up to, but not including, the endIndex.
// If endIndex is omitted, it will slice to the end of the string.

// String Examples:

let text = "Hello, world!";
let slicedText = text.slice(2, 5);
console.log(slicedText); // Output: "llo"

let phrase = "JavaScript is cool";
let slicedPhrase = phrase.slice(11); // Slices from index 11 to the end
console.log(slicedPhrase); // Output: "is cool"

let message = "Welcome to JavaScript all people!";
let lastPart = message.slice(-9); // Slices the last 9 characters, starting from the end and moving backward.
console.log(lastPart); // Output: "all people!"

let colours = "Red, Blue, Green";
let selectedColours = colours.slice(-4, -1); // Slices from the last 4th character to the last (but not including)
console.log(selectedColours); // Output: "ree"

// Array Examples:

let fruits = ["Apple", "Cherry", "Pear"];
let selectedFruits = fruits.slice(1, 4); // Slices from index 1 to index 3 (not including 4)
console.log(selectedFruits); // Output: ["Cherry", "Pear"]
