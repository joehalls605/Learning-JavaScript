/*
In JavaScript, type conversion is the process of converting a value from one type to another. 

There are two types of type conversions:

Implicit (Automatic) Type Conversion
Explicit (Manual) Type Conversion


Implicit Type Conversion
Implicit type conversion, also known as type coercion, occurs automatically when JavaScript tries to perform an operation involving different types.

Examples:
*/

let result = 5 + "10";
console.log(result); // "510"
// In this example, JavaScript converts the number 5 to a string and then concatenates it with "10".

let value = !!"non-empty string";
console.log(value); // true

// In this case, JavaScript converts the string "10" to the number 10 and then subtracts 5.
let result2 = "10" - 5;
console.log(result2); // 5

/*
Explicit Type Conversion
Explicit type conversion, also known as type casting, occurs when you manually convert a value from one type to another using built-in functions
*/

let number = 123;
let str = String(number);
console.log(str); // "123"

let str2 = "456";
let num = Number(str2);
console.log(num); // 456

let str3 = "748";
let num2 = Number(str3);


let str4 = "718";
let num3 = Number(str4);

let year = 1997;
let stringYear = String(year);


/*
Differences and Use Cases
Implicit Conversion:

Useful for quick operations.
Can lead to unexpected results if not careful.
Common in comparisons and arithmetic operations.

Explicit Conversion:

More predictable and controlled.
Essential for clarity in code, especially in larger projects.
Prevents bugs due to unexpected type coercion.

*/
