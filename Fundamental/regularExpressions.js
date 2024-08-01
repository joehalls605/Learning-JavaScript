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
Common Methods for Using Regular Expressions

test Method: Tests if a pattern exists in a string.
exec Method: Executes a search for a match in a string and returns an array of results.
match Method: Retrieves the matches when matching a string against a regular expression.
replace Method: Replaces matched substrings in a string.
search Method: Searches for a match and returns the index of the match.
split Method: Splits a string into an array of substrings.

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
Special Characters in Regular Expressions
.: Matches any single character except newline.
^: Matches the beginning of the string.
$: Matches the end of the string.
*: Matches 0 or more occurrences of the preceding character.
+: Matches 1 or more occurrences of the preceding character.
?: Matches 0 or 1 occurrence of the preceding character.
[]: Matches any one of the characters inside the brackets.
|: Acts like a logical OR.
\d: Matches any digit (equivalent to [0-9]).
\w: Matches any word character (alphanumeric + underscore).
\s: Matches any whitespace character (space, tab, newline).
*/

let regex7 = /\d+/; // \d matches the digit equivalent 0 -9
let str4 = "There are 123 apples";

console.log(str4.match(regex7)); // Output: ['123']


let regex8 = /\w+/; // Matches word character (alphanumeric + underscore).
let str5 = "Hello world!";

console.log(str5.match(regex8)); // Output: ['Hello'] - first sequence found.
