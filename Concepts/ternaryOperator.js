/* Ternary operator
The ternary operator is a compact way to express conditional statements.
It generally follows the pattern:

let result = condition ? expression1 : expression2;

condition - this is the expression that evaluates to either true or false
expression1 - this is the value or expression returned if true
expression2 - this is the value or expression returned if the condition is false
*/

let age = 20;
let message = (age >= 18) ? "You are an adult" : "You are not an adult";

let name = "Joe";
let message2 = (name === "Joe") ? "You are Joe!" : "You are not Joe!";

name = "Elena";
let message3 = (name === "Elena") ? "You are Elena" : "You are not Elena";

name = "Phil";
let message4 = (name === "Phil") ? "You are Phil" : "You are not Phil";

name = "Joe";
let isJoe = (name === "Joe") ? "You are Joe!" : "You are not Joe!";

age = 20;
let canVote = (age >= 18) ? "You can vote!" : "You cannot vote!";

let number = 7;
let isEven = (number % 2 === 0) ? "The number is even" : "The number is odd";

let planet = "Earth";
let isPlanet = (planet === "Earth") ? "The planet is Earth" : "The planet is not Earth";

age = 17;
let drinkMessage = (age >= 18) ? "You can drink" : "You are too young to drink";

age = 45;
let retireMessage = (age > 65) ? "You can retire" : "You cannot retire yet";

// Setting a default value
let input = "";
let defaultText = input ? input : "Default text";

let num = -5;
let checkNumber = (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";

let isActive = true;
let className = isActive ? "active" : "inactive";

name = "Boris";
isJoe = (name === "Joe") ? "It's Joe!" : "You have not found Joe";

let dayOfWeek = "Saturday";
let isSaturday = (dayOfWeek === "Saturday") ? "Yes, it's Saturday" : "It's not Saturday!";

let dayOfTheWeek2 = "Sunday";
let isSunday = (dayOfTheWeek2 === "Sunday") ? "Yes, it's Sunday" : "It's not Sunday!";
