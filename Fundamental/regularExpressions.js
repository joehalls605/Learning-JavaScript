/*
Regular expressions (regex) are patterns used for matching character combinations in strings.
They provide a powerful and flexible way to search, match, and manipulate text.
*/

/*
Pattern matching: A regular expression is like a search pattern that you define.
It is made from characters and special symbols that represent a set of possible text combinations.
*/

var pattern = /^h.llo$/i;
var result = pattern.test("Hello"); // true
result = pattern.test("Hola"); // false

/*
In this example, the pattern ^h.llo$ matches a string that starts with "h," 
followed by any character, then "llo," and the i flag makes it case-insensitive.

The regular expression pattern ^h.llo$:
- ^ asserts the start of the string.
- h matches the literal character "h".
- . matches any single character (except for newline characters).
- llo matches the literal characters "llo".
- $ asserts the end of the string.
The i flag makes the pattern case-insensitive.
So, this pattern will match strings that:
- Start with "h"
- Followed by any character
- Followed by "llo"
- And nothing else comes after "llo" until the end of the string.
*/

/*
Creation: You create a regular expression using the RegExp object or by 
enclosing the pattern between forward slashes (/). For example:
*/

var pattern = /hello/;

//or

var pattern = new RegExp("hello");
console.log(pattern.test("Say hello!")); // true

/*
Metacharacters: Special characters in regex are called metacharacters, and they have special meanings. For example:
- . (dot) matches any single character.
- * matches zero or more occurrences of the preceding character.
- + matches one or more occurrences of the preceding character.
- ? matches zero or one occurrence of the preceding character.

Character Classes: Square brackets ([]) are used to define character classes. For example, [aeiou] matches any vowel.

Quantifiers: These define the number of occurrences of a character or group. For example:
- {n} matches exactly n occurrences.
- {n,} matches n or more occurrences.
- {n,m} matches between n and m occurrences.

Anchors: ^ (caret) represents the start of a line, and $ represents the end. For example, ^hello matches "hello" only if it appears at the start of a line.

Modifiers: You can add flags after the closing slash to modify how the pattern is matched. Common ones include:
- i: Case-insensitive matching.
- g: Global matching (find all matches, not just the first).
- m: Multiline matching.

Meta characters:
*/

var pattern = /h.llo/;
console.log(pattern.test("hello")); // true
console.log(pattern.test("hillo")); // true
console.log(pattern.test("hallo")); // false

/*
Character classes:
*/

var pattern = /[aeiou]/;
console.log(pattern.test("apple")); // true
console.log(pattern.test("banana")); // false

/*
Quantifiers:
*/

var pattern = /o{2}/;
console.log(pattern.test("food")); // true
console.log(pattern.test("cookie")); // false

/*
Anchors:
*/

var pattern = /^hello/;
console.log(pattern.test("hello world")); // true
console.log(pattern.test("say hello")); // false

/*
Modifiers:
*/

var pattern = /hello/gi;
console.log("Hello Hello Hello".match(pattern)); // ["Hello", "Hello", "Hello"]
