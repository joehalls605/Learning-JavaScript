/*
Operator precedence determines the order in which operations are performed in a JavaScript expression. 

Here's a simple explanation:
Imagine you have a math problem like 2 + 3 * 4. Without precedence rules, you might add 2 + 3 first and then multiply by 4, giving you 20. But according to precedence rules, multiplication has a higher precedence than addition. So, 3 * 4 is calculated first, resulting in 12, and then 2 is added to it, giving you the correct answer, 14.

These rules help JavaScript understand which operation to do first when there are multiple operations in an expression. For example, parentheses () can be used to change the order of operations. If you want 2 + 3 to be calculated first in 2 + (3 * 4), you put parentheses around 3 * 4.
*/

// Example 1: Without parentheses
let result1 = 2 + 3 * 4;
console.log(result1); // Output: 14

// Example 2: With parentheses to change precedence
let result2 = (2 + 3) * 4;
console.log(result2); // Output: 20


/*
Order of precedence:
Parentheses () - force a particular order
Member Access (e.g., object.property) and Function Calls (e.g., function())
Unary Operators like ! (NOT), + (positive), - (negative)
Exponentiation **
Multiplication *, Division /, Remainder %
Addition +, Subtraction -
Comparison (<, >, <=, >=)
Equality Checks (==, ===, !=, !==)
Logical AND &&
Logical OR ||
Assignment (=, +=, -=, etc.)
Comma Operator , - used to separate expressions, with the last one being returned
*/