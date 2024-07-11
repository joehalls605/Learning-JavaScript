/*
... args is used to capture the indefinite number of arguments as an array. Known as the rest parameter syntax.
it allows a function to accept any number of arguments, regardless of how many were defined during the function's creation.
*/

function sumNumbers(...args){ // becomes [1,4,5]
    let sum = 0;
    for(let num of args){ 
        sum += num;
    }
    return sum;
}

console.log(sumNumbers(1,4,5));


function sumNumbers(...numbers){ // becomes [1,4,5] - this is the same thing, just naming differently.
    let sum = 0;
    for(let num of numbers){ 
        sum += num;
    }
    return sum;
}

console.log(sumNumbers(1,4,5));