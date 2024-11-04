/*
The !! (double exclamation) in JavaScript is a quick way to force any value to become true or false. 
It’s essentially a shortcut for converting a value to a strict boolean.

What !! Does:
The first ! turns the value into its opposite boolean:
If the value is truthy (like "hello", 42, or {}), !value becomes false.

The second ! flips it again to return a straightforward true or false:
!!value ends up as true if the original value was truthy.
!!value ends up as false if the original value was falsy.
*/

let username = "Alice";

if (!!username) {
    console.log("User exists");
} else {
    console.log("No user");
}
// Output: "User exists" because `username` is truthy
