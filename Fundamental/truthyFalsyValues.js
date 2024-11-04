/*
In JavaScript, a truthy value is any value that, when evaluated in a boolean context, becomes true. Most values are truthy, except for a few specific falsy values.

Falsy Values
Only a few values are falsy in JavaScript, meaning they will evaluate to false in a boolean context. These are:

false — the boolean false itself
0 — the number zero
"" or '' — an empty string
null — represents "no value"
undefined — represents "undefined value"
NaN — "Not a Number" (result of invalid math operations)

Anything else is truthy.
*/

let value = "hello";

if (value){
    console.log("this is truthy");
}
else{
    console.log("this is falsy");
}

// you can use !! to check this truthiness

console.log(!!"hello"); // true, because hello is truthy
