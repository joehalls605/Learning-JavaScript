/*
The rest syntax (`...`) in JavaScript allows you to group the remaining items into a single array or object.
*/

function sum(...args){
    console.log(args); // args is an array containing all arguments passed to sum
}
sum(1,2,3);

/*
The rest parameter is indicated by three dots (...) followed by a parameter name. 
It collects all remaining arguments into an array.
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

// A way to remember, rest - "collect the rest" and gather the remaining items into an array
