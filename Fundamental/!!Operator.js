/*
The !! operator in JavaScript is a double negation operator. It's used to convert a value to it's boolean equivelant.
For example, it takes any value and converts it to a true or false based value based on it's truthiness or falsiness.

The !! operator is used to convert any value into a true or false value, also known as a boolean value. 
It's like asking "Is this value truthy or falsy?"

How it works:

First ! (not) Operator:
The ! operator turns the value into the opposite boolean value.
If the value is truthy (like a non-empty string, a number other than 0, etc.), ! makes it false.
If the value is falsy (like 0, "" (empty string), null, undefined, etc.), ! makes it true.

Second ! (not) Operator:

The second ! operator flips the boolean value again.
So, it turns false back to true and true back to false.

This double flip (!!) converts any value into its correct boolean equivalent.
*/

let value1 = "Hello";
let value2 = 0;

console.log(!!value1); // Outputs: true
console.log(!!value2); // Outputs: false


/*
Why Use !!?
The !! operator is handy when you need to make sure a value is converted to true or false, like in conditional checks.
*/

let inputValue = "";

if (!!inputValue) {
    console.log("The input has a value.");
} else {
    console.log("The input is empty.");
}

// Outputs: The input is empty.
