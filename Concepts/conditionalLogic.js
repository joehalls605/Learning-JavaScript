/*
Conditional logic

if
Purpose: Used to check a specific condition.
Execution: Runs the block of code if the condition is true.

else if
Purpose: Used to check another condition if the previous if (or else if) condition was false.
Execution: Runs the block of code if its condition is true, but only if all previous conditions were false.

else
Purpose: Provides an alternative block of code that runs if none of the preceding if or else if conditions are true.
Execution: Runs when the if and any else if conditions are false.
*/

const number = 10;

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) { // else if only runs if the previous condition was false.
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}


const age = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote yet.");
}

const dayOfWeek = "Monday";

switch (dayOfWeek) {
    case "Monday":
        console.log("It's the start of the week.");
        break;
    case "Friday":
        console.log("It's almost the weekend!");
        break;
    default:
        console.log("It's a regular day.");
}

const variable = 42;

switch (typeof variable) {
    case "number":
        console.log("It's a number.");
        break;
    case "string":
        console.log("It's a string.");
        break;
    default:
        console.log("It's some other type.");
}

let temperature = 15;

if(temperature > 30){
    // Hot
}
else if(temperature > 20){
    // Nice weather
}
else if(temperature >= 10){
    // Average
}
else{
    // it's cold
}

