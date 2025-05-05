/* A regular expression is a pattern used to search or match parts of text. */

// Literal match

let str = "I love cats!";
let regex = /cat/;
regex.test(str); // true;

// Case-insensitive match
let str = "I Love Cats!";
let regex = /cat/i // i means ignore case
regex.test(str); // true

// Match digit
let str = "My number is 42";
let regex = /\d+/ // one or more digits
regex.test(str)

// Extract digits from a string
let str = "Order #12345";
let regex = /d+/;
let result = str.match(regex);
console.log(result); // 12345

// Match a simple email
let email = "hello@example.com";
let regex = /\w+@w+\.\w+/; //
/* Above explained:
w/ means any "word" (letters,numbers, or underscore [a-zA-Z0-9_]
+ means one or more of those
@ matches the @symbol
\. matches a real period, or any character
*/

regex.test(email); // true

// Replace all digits with X
let str = "My pin is 1234";
let result = str.replace(/\d/g, "X"); // 'g' = global (all matches)
console.log(result); // My pin is XXXX

// Match a word that starts with "c" and ends with "t"
let str = "The cat sat on the mat.";
let regex = /c.t/;
str.match(regex); // ["cat"]

// Challenge 1: Match a Phone Number (Format: 123-456-7890)

let str = "123-456-7890";
let regex = /\d{3}-\d{3}\d{4}/;
console.log(str.match(regex));

//  Challenge 2: Match a Valid Email Address

let email = "user@example.com";
let regex = /\w+@w+\.\w+/;
console.log(str.match(regex));
















