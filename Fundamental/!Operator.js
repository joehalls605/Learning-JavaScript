/*
The ! operator in JavaScript is the logical NOT operator. It’s used to invert, or "flip," a boolean value.

What ! Does:
If you apply ! to a truthy value, it becomes false.
If you apply ! to a falsy value, it becomes true.
*/

let isLoggedIn = true;

console.log(!isLoggedIn); // false, because `isLoggedIn` was `true`


// Checking Falsy Values with !

let username = "";
if(!username){
    console.log("no username provided");
}

// Output: "No username provided", because `username` is an empty string, which is falsy