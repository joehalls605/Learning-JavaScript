/*
The rest operator allows you to represent an indefinite number of arguments as an array.
*/

function sum(...args){
    console.log(args); // args is an array containing all arguments passed to sum
}
sum(1,2,3);

/*
The rest parameter is indicated by three dots (...) followed by a parameter name. It collects all remaining arguments into an array.
*/
function sum(...args){
    return args.reduce((acc, val) => acc + val, 0);
}

function sum(...args){
    return args.reduce((acc, val) => acc + val, 0);
}

function logArguments(firstArg, ...remainingArgs){
    console.log(`First argument:${firstArg}`);
    console.log(`Remaining argument:${remainingArgs}`);
}

logArguments("one");
// Output:
// First argument: one
// Remaining arguments: []

logArguments("one", "two", "three");
// Output:
// First argument: one
// Remaining arguments: [ 'two', 'three' ]
