/*SWITCH
A switch statement in programming is a control flow statement that allows a variable to be tested for equality against a list of values. 
Each value is called a case, and the variable is checked against each case. 
When a match is found, the corresponding block of code is executed.
*/


switch(variable) {
    case value1:
        // Code to be executed if variable === value1
        break;
    case value2:
        // Code to be executed if variable === value2
        break;
    // More cases...
    default:
        // Code to be executed if no case matches
}


let dayofTheWeek = 3;

// case = 1
// dayoftheweek = 1;

switch(dayofTheWeek){
    case 1: 
    console.log("It's monday");
    break;
    case 2:
    console.log("It's tuesday")
    case 3:
    console.log("It's wednesday"); 
    default:
        console.log("Invalid day of trhe week")
}


const month = "July";

switch(month){
    case "June":
        console.log("It's June!");
        break;
    case "July":
        console.log("It's July!");
    default:
        console.log("Could not find July");
}

let number = 2;

switch(number){
    case 1: 
    console.log("It's number 1!");
    break;
    case 2:
    console.log("It's number 2!");
    default: 
    console.log("Haven't found the number!");
}