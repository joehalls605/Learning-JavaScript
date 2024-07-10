/*
var: Variables declared with var have function scope. 
This means they are only accessible within the function they are declared in or globally if declared outside any function.

let: Variables declared with let have block scope. 
This means they are only accessible within the block (delimited by {}) they are declared in.
*/

function example() {
    if (true) {
        var x = 10;
        let y = 20;
    }
    console.log(x); // 10
    console.log(y); // ReferenceError: y is not defined
}
