// CONDITIONAL LOGIC

const number = 10;

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
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