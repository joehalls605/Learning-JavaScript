/* The arguments object is a built in JavaScript object that -
contains all arguments passed to a function.
It's array-like but not an array (lacks methods like .map() or forEach)
Contains all passed arguments, even if they not declared as parameters.
Useful for handling functions with variable numbers of arguments.

Not available in arrow functions.
*/

function showArguments(){
    console.log(arguments); // 1 2 3
}

showArguments(1,2,3);

// But the rest operator is generally used instead

function showArgs(...args){
    console.log(args); // [1, 2, 3]
}
showArgs();
