console.log("Loaded.");
// Used to test if a pattern exists in a string and returns true or false

let helloRegex = /Hi/;
let string = "Hi";

console.log(helloRegex.test(string));

const people = ["Phil", "James", "Joe"];
let personRegex = /Joe/;

people.forEach(person => {
    if(personRegex.test(person)){
        console.log(`${person} matches the pattern`);
    }
});
console.log("TEST ENDS");

// Exec method 
// Executes a search match in a string and returns an array with match details
// Returns null if no match is found
// Uses the global flag, which allows you to iterate through matches one at a time for details

const ByeRegex = /Bye/g;  // Notice the 'g' flag for global matching
let string2 = "Bye Bye Papa";

// First exec() call
let result1 = ByeRegex.exec(string2);
if (result1) {
    console.log("Bye was found!");
    console.log(result1); // Logs the first match details
}

// Second exec() call
let result2 = ByeRegex.exec(string2);
if (result2) {
    console.log("Bye was found again!");
    console.log(result2); // Logs the second match details
}

console.log("EXEC ENDS");


// Match method
// Retrieves all the matches when matching a string against a regular expression
// Retrurns an array of all matches at once

let bonjourRegex = /bonjour/;
let string3 = "bonjour joseph";

console.log(string3.match(bonjourRegex));