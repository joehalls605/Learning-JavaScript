/* Scope refers to the context in which variables are accessible. There are two main types of scope in JavaScript.

Global scope variables are declared outside of any function or block, are in global scope and can be accessed anywhere in the code.

Local scope variables declared within a function or block are in the local scope and can only be accessed within that function or block

Example
*/

let globalVariable = "I'm a global";

function myFunction(){
    let localVariable = "I'm local!";
    console.log(globalVariable); // Accessible
    console.log(localVariable);  // Accessible
}

console.log(globalVariable); // Accessible
console.log(localVariable);  // Error: localVariable is not defined