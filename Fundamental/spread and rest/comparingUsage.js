// Rest Operator Example

function restExample(...args){
    console.log('Rest Operator Example:');
    console.log('Arguments as array:', args); 
}

restExample(1, "Hello", {key: "value"}, [2,3,4]); // Output: [ 1, 'hello', { key: 'value' }, [ 2, 3, 4 ] ]

// Spread Operator example with Arrays

function spreadExample(a, b, c){
    console.log("Spread Operator Example with Arrays");
    console.log('Arguments:', a, b, c);
}

const array = [1,2,3];
spreadExample(...array); // Output: 1 2 3

// Spread Operator example with Objects

const obj1 = {x: 1, y: 2};
const obj2 = {...obj1, z: 3};

console.log('Spread Operator Example with Objects:');
console.log('Combined object:', obj2); // output: { x: 1, y: 2, z: 3 }


/*
Rest Operator (...args): Collects multiple arguments into an array. Used primarily in function parameters.

Spread Operator (...array): Spreads elements of an array (or properties of an object) into individual elements. Used in array literals, object literals, and function calls.
*/