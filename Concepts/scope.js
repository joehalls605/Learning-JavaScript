// SCOPE
/*
Global Scope:
Description: Variables declared outside of any function or block.
Accessibility: Accessible from anywhere in the script.

Local Scope:
Description: Variables declared inside a function.
Accessibility: Accessible only within the function where they are declared.

Block Scope:
Description: Variables declared inside a block (e.g., within curly braces of an if statement).
Accessibility: Accessible only within the block where they are declared.
*/

// Global scope
let globalVariable = 'I am global';

function exampleFunction() {
    console.log(globalVariable); // Accessible here (lexical scope)
}

exampleFunction();
console.log(globalVariable); // Accessible here (global scope)


function exampleFunction() {
    // Local scope (lexical scope)
    let localVariable = 'I am local';
    console.log(localVariable); // Accessible here
}

exampleFunction();
// console.log(localVariable); // This would result in an error


if (true) {
    // Block scope
    let blockVariable = 'I am block-scoped';
    console.log(blockVariable); // Accessible here
}

// console.log(blockVariable); // This would result in an error
