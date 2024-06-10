/*
JavaScript compression techniques aim to reduce the size of JavaScript files, making them faster to download and execute in web browsers. 
Some simple compression techniques:

Minification:
Description: Minification involves removing unnecessary characters from the code without changing its functionality. This includes removing whitespace, comments, and shortening variable names.
*/

function add(a, b) {
    // Add two numbers
    return a + b;
}

// Minfied

function add(a,b){return a+b;}

// Tree Shaking
// Original JS modules

// File 1 (module 1)
export function add(a, b) {
    return a + b;
}

// File 2 (module 2)
export function subtract(a, b) {
    return a - b;
}

// Main file
import { add } from './module1.js';
console.log(add(5, 3));

// After tree shaking

// Only 'add' function is included in the bundle
function add(a, b) {
    return a + b;
}

console.log(add(5, 3));
