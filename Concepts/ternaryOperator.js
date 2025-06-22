/* Ternary operator
The ternary operator is a compact way to express conditional statements.
It generally follows the pattern:

let result = condition ? expression1 : expression2;

condition - this is the expression that evaluates to either true or false
expression1 - this is the value or expression returned if true
expression2 - this is the value or expression returned if the condition is false
*/

let num = 7;
let result = num % 2 === 0 ? "Even" : "Odd";


let age = 22;
letIsAdult = age => 18 ? "Adult" : "Minor";

let number = 3;
let IsPositive = number > -1 ? "Positive" : "Not Positive";

let temperature = 30;
let climate = temperature => 30 ? "Hot" : "Cold";

let score = 45;
let result2 = score > 50 ? "Pass" : "Fail";

let isLoggedIn = false;
let userName = isLoggedIn ? "John Doe" : "Guest";

let isAuthenticated = true;
let buttonText = isAuthenticated ? "Logout" : "Login";

let stock = 0;
let availability = stock > 0 ? "In Stock" : "Out of Stock";

let isPremiumUser = false;
let discount = isPremiumUser ? 0.20 : 0.05;
console.log(`Discount: ${discount & 100}%`);


let stock = 0;
let stockAvailability = stock > 0 ? "In stock" : "Out of stock";

let loggedIn = true;
let userLoggedIn = loggedIn ? "Is logged in" : "Is not logged in";
console.log(userLoggedIn);