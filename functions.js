function greet(name){
    return "Hello" + name + "!";
}

let greeting = greet("Alice");
console.log(greeting);



function square(number){
    return number * number;
}

let result = square(4);
console.log(result);



function greet(name = "Stranger"){
    return "Hello " + name + "!"; 
}

let greeting1 = greet("Alice");
let greeting2 = greet(); // uses default parameter


// Function returning a function

function createMultiplier(factor){
    return function (number){
        return number * factor;
    };
}

let double = createMultiplier(2);
let triple = createMultiplier(3);

console.log(double(5));
console.log(triple(5));

