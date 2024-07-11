/*
JavaScript Assessment
*/

// 1.1
var x = 1;
let y = 2;
const z = 0;

// 1.2
let string = "dsasd";
let number = 0;
let bool = true;

// 1.3
var numberToConvert = 123;
const stringNumber = String(numberToConvert); // Explicit conversion
const implicitConversion = +"456"; // Implicit conversion

// 1.4
var myVar = "true";
var myVarToBoolean = !!myVar; // Converts any truthy value to true and falsy value to false

// 1.5
let person = {
    name: "John",
    age: 30,
    isStudent: false
}; // Simplified using object literal

// 1.6
const total = (5 * 2) + 3; // Correct usage of operator precedence

// 2.1
const sum = 5 + 2;
const difference = 5 - 2;
const product = 5 * 2;
const quotient = 5 / 2;

// 2.2
var a = 12;
var b = 13;
const comparison1 = a == b; // false
const comparison2 = a === b; // false
const comparison3 = a != b; // true
const comparison4 = a !== b; // true
const comparison5 = a > b; // false
const comparison6 = a < b; // true
const comparison7 = a >= b; // false
const comparison8 = a <= b; // true

// 2.3
const logicalAnd = a && b; // 13
const logicalOr = a || b; // 12
const logicalNot = !a; // false

// 2.4
var c = 0;
c += a; // c is now 12
c -= b; // c is now -1
c *= a; // c is now -12
c /= b; // c is now -0.9230769230769231

// 3.1
var x = 8;
if (x > 0) {
    console.log("I'm more than 0");
} else if (x == 0) {
    console.log("I'm equal to 0");
} else {
    console.log("I'm less than 0");
}

// 3.2
const gradeResult = 83;
var grade;

if (gradeResult >= 90) {
    grade = "A";
} else if (gradeResult >= 80) {
    grade = "B";
} else if (gradeResult >= 70) {
    grade = "C";
} else if (gradeResult >= 50) {
    grade = "D";
} else {
    grade = "F";
}

// 3.3
let day = 3; // Example input
let dayName;

switch (day) {
    case 0:
        dayName = "Monday";
        break;
    case 1:
        dayName = "Tuesday";
        break;
    case 2:
        dayName = "Wednesday";
        break;
    case 3:
        dayName = "Thursday";
        break;
    case 4:
        dayName = "Friday";
        break;
    case 5:
        dayName = "Saturday";
        break;
    default:
        dayName = "Sunday";
}

// 3.4
var number = 3;
var isOdd = (number % 2 === 0) ? "Even" : "Odd";

// 4.1
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let f = 1;
while (f <= 5) {
    console.log(f);
    f++;
}

f = 1;
do {
    console.log(f);
    f++;
} while (f <= 5);

// 4.2
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue; // Skip the iteration where i is 5
    if (i === 8) break; // Exit the loop when i is 8
    console.log(i);
}

// 5.1
function greet(name) {
    console.log("Hello " + name + "!");
}
greet("Joseph"); // Corrected

// 5.2
function sum(x, y) {
    return x + y;
}

// 5.3
function isEven(x) {
    return x % 2 === 0; // Corrected
}

// 6.1
const square = (num) => num * num; // Simplified

// 6.2
function summedArgs(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0); // Completed
}

// 6.3
function multiply(a, b = 10) {
    return a * b;
}
