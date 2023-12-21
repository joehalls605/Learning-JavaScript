// SCOPE

// Global scope
let globalVariable = 'I am global';

function exampleFunction() {
    console.log(globalVariable); // Accessible here
}

exampleFunction();
console.log(globalVariable); // Accessible here


function exampleFunction() {
    // Local scope
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