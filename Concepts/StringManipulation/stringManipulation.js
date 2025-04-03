// Strings in JavaScript are immutable. When you modify a string, a new string is created. The original string remains unchanged.

let singleQuote = 'Hello';
let doubleQuote = "World";
let templateLiteral = `Hi there, ${singleQuote} ${doubleQuote}`;


// The legnth property gives the total number of characters

singleQuote.length(); // Output: 13

singleQuote.toUpperCase(); // Converts to uppercase
singleQuote.toLowerCase(); // Converts to lowercase


// Strings work like arrays for accessing characters using [] or charAt(index);

singleQuote[2]; // l
singleQuote.charAt(1); // e

const quote = "Joe is wonderful";
quote.indexOf("wonderful"); // Returns 7


let text = "JavaScript is awesome";
text.indexOf("awesome"); // 15
text.includes("rubbish"); // false
text.includes("awesome"); // true

let str = "JavaScript";

str.slice(0,4); // Java (0 to 3)
str.slice(4,10); // Script (4 to 9)
str.slice(-6, -1); // Scrip (counts from the end) so it works its way back to that point then counts the between values.

str.substring(0,4); // Java (0 to 3)
str.substring(4, 10); // Script (4 to 9)
str.substring(-6, -1); // Output "", negative values are treated as 0


let greeting = "Hello Wolrd";
greeting.replace("World", "JavaScript"); // Hello JavaScript

let name = "   Alice  ";
name.trim(); // Alice

let data = "red,green,blue";

// .split seperator splits a string into an array based on a seperator
data.split(","); // ["red", "green", "blue"]

// .join combines an array into a string
let colours = ["red", "green", "blue"];
colours.join("-"); // red-green-blue