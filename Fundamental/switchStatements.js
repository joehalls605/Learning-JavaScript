/* Switch statements

A switch statement in programming is a control structure that allows you to execute one block of code from multiple options based on the value of a given expression. 
It's often used when you have a single variable that you need to compare against many possible values, and it makes the code more readable and concise compared to a series of if-else if statements. You should use a switch statement when you have a clear set of discrete values to compare against and you want a cleaner, more organized way to handle multiple conditions.
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

/*

When to Use Switch Statements

Multiple Discrete Values: Use a switch statement when you have one variable that needs to be compared against many specific values, and you want to execute different code based on each value.
Readability: Use switch statements to improve code readability when handling multiple conditions, as they can make the code cleaner compared to a long series of if-else if statements.

When Not to Use Switch Statements
Complex Conditions: Avoid using switch statements when your conditions involve ranges, logical operations, or multiple variables, as switch statements only handle equality checks.
Few Conditions: Avoid switch statements for a small number of conditions, as if-else might be simpler and more straightforward.
Polymorphic Behavior: Avoid using switch statements when different object types need to execute different behavior, as using polymorphism is more appropriate in object-oriented programming.
*/