/* Ternary operator
The ternary operator is a compact way to express conditional statements.
It generally follows the pattern:

var result = condition ? expression1 : expression 2;

condition - this is the expression that evaluates to either true or false
expression1 - this is the value or expression returned if true
expression 2 - this is the value or expression returned if the condition is false

*/

var age = 20;
var message = (age >= 18) ? "You are an adult" : "You are not an adult";


var name = "Joe";
var message2 = (name === "Joe") ? "You are Joe!" : "You are not Joe!";

var name = "Elena";
var message3 = (name === "Elena") ? "You are Elena" : "You are not Elena";


var name = "Phil";
var message4 = (name === "Phil") ? "You are phil" : "You are not phil";


var name = "Joe";
var isJoe = (name === "Joe") ? "You are Joe!" : "You are not Joe!";


var age = "20";
var canVote = (age => 20) ? "You can vote!" : "You cannot vote!";

var number = 7;
var isEven = (number % 2 === 0) ? "The number is even": "The number is odd";

// setting a default value;

var input = "";
var defaultText = input ? input: "Default text";

var num = -5;
var checkNumber = (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";

var isActive = true;
var className = isActive? "active" : "inactive";


var name = "Boris";
var isJoe = (name == "Joe") ? "It's Joe!" : "You have not found Joe";


var dayofWeek = "Saturday";
var isSaturday = (dayofWeek) ? "Yes it's saturday" : "It's not saturday!";

var dayofTheWeek2 = "Sunday";
var isSunday = (dayofTheWeek2) ? "Yes it's sunday" : "It's not sunday!";




