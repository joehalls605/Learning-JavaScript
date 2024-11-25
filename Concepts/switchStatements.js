/* Switch statements
A switch statement lets you execute different blocks of code based on the value of a single variable. 
It's helpful when you want to check one variable against multiple possible values. 
Making the code cleaner than a series of if...else if statements.
*/

//Simple outline
switch(expression){
    case value1:
        // Code to be executed if expression === value1;
        break;
    case value2:
        // Code to be executed if expression === value2;
        break;
    // Here I can add more cases
    default:
        // Code to be executed if none of the above cases match
}

let fruit = "apple";

switch(fruit){
    case "banana":
        console.log("Banana is yellow");
        break;
    case "apple":
        console.log("Apple is red");
    break;
    default:
        console.log("Unknown fruit colour");
}

let day = "Monday";
switch (day){
    case "Monday":
        console.log("today is monday!");
        break;
    case "Tuesday":
        console.log("today is tuesday");
        break;
    case "Wednesday":
        console.log("today is wednesday");
        break;
    default:
        console.log("it's another day in the week!");
}

let letter = "A";

switch (letter){
    case "B":
        console.log("My letter is B");
        break;
    case "A":
        console.log("My letter is A");
        break;
    case "C":
        console.log("My letter is C");
    default: console.log("None of the letters matched the letter");
}

/*

When to Use Switch Statements

Use a switch statement when you have one variable that needs to be compared against many specific values, 
and you want to execute different code based on each value.

When Not to Use Switch Statements
Avoid using switch statements when your conditions involve ranges, logical operations, or multiple variables, as switch statements only handle equality checks.
Few Conditions: Avoid switch statements for a small number of conditions, as if-else might be simpler and more straightforward.
Polymorphic Behavior: Avoid using switch statements when different object types need to execute different behavior, as using polymorphism is more appropriate in object-oriented programming.
*/