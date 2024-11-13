/*
Regular expressions (often abbreviated as "regex" or "regexp") are patterns used to match character combinations in strings. 
In JavaScript, regular expressions are used to perform pattern-matching and search-and-replace functions.

A regular expression can be created in two ways:

Using a regular expression literal, which consists of a pattern enclosed between slashes.
Using the RegExp constructor function.
*/

// Regular Expression Literal
let regex = /abc/;

// Regular Expression with RegExp Constructor
let regex2 = new RegExp('abc');

/*
Common Methods for Using Regular Expressions in JavaScript

test Method: 
   - Tests if a pattern exists in a string.
   - Returns `true` if a match is found, `false` otherwise.
exec Method:
   - Executes a search for a match in a string.
   - Returns an array with detailed match information if a match is found; returns `null` if no match is found.
match Method:
   - Retrieves all matches when matching a string against a regular expression.
   - Returns an array of all matches if `g` (global) flag is set in the regex; otherwise, returns an array with details of the first match only.
replace Method:
   - Replaces matched substrings within a string based on the regular expression.
search Method:
   - Searches for the first match of a regular expression in a string.
   - Returns the index of the first match, or `-1` if no match is found.
split Method:
   - Splits a string into an array of substrings based on a regular expression or delimiter.
   - If the regex matches, it defines the points at which the string is split.
*/

// Test method 

let regex3 = /hello/;
let str = "hello world";

console.log(regex3.test(str)); // Output: true

// Exec method

let regex4 = /hello/;
let str1 = "hello world";

let result = regex4.exec(str1);
console.log(result); // Output: ['hello']

// Match method

let str2 = "hello world";
let result5 = str2.match(/hello/);

console.log(result); // Output: ['hello']

// Replace method

let str3 = "hello world";
let newStr = str3.replace(/world/, "there");

console.log(newStr); // Output: "hello there"


/*
Global flag is a special flag that changes the way a regular expression behaves when it searches for matches within a string.

Without the g flag: A regular expression will only match the first occurrence in the string.
With the g flag: The regular expression will search through the entire string and match all occurrences.

Why Use the Global Flag?
It allows you to find all matches in a string, rather than just stopping at the first match.
It is particularly useful when you want to iterate over all occurrences of a pattern in a string.
*/

const text = "I have a cat, a dog, and another cat.";
const regexG = /cat/g; // With 'g' flag

const resultG = text.match(regex);
console.log(resultG); // Output: ["cat", "cat"]

/*
Special Characters in Regular Expressions (Simplified)

.   - Matches any single character except for a newline.
^   - Matches the start of a string.
$   - Matches the end of a string.
*   - Matches zero or more of the previous character.
+   - Matches one or more of the previous character.
?   - Matches zero or one of the previous character (makes it optional).
[]  - Matches any one of the characters listed inside the brackets.
|   - Acts like "OR" (matches one pattern or another).
\d  - Matches any digit (0-9).
\w  - Matches any "word" character (letters, numbers, or underscore).
\s  - Matches any whitespace (spaces, tabs, or newlines).

*/


let regex7 = /\d+/; // \d matches the digit equivalent 0 -9
let str4 = "There are 123 apples";

console.log(str4.match(regex7)); // Output: ['123']


let regex8 = /\w+/; // Matches word character (alphanumeric + underscore).
let str5 = "Hello world!";

console.log(str5.match(regex8)); // Output: ['Hello'] - first sequence found.


// More practice

let helloRegex = /hello/;
let string = "Hi";

console.log(helloRegex.test(str));