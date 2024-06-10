/*
Primitive values are data types that are immutable (cannot be changed) and are directly stored in memory.

Numbers (e.g., 5, 3.14)
Strings (e.g., "hello", 'world')
Booleans (e.g., true, false)
Undefined (e.g., undefined)
Null (e.g., null)
Symbols (new in ECMAScript 6)

Reference Values:
Reference values are objects that are stored as references in memory and are mutable (can be changed).

Examples:
Objects (e.g., {} or new Object())
Arrays (e.g., [] or new Array())
Functions (e.g., function() {})

Key Differences:

Mutability:
Primitive values are immutable; once created, they cannot be changed.
Reference values are mutable; their properties and values can be changed.
Storage:

Primitive values are directly stored in memory.
Reference values are stored as references (pointers) in memory, with the actual data stored elsewhere.
Comparison:

Primitive values are compared by their value (i.e., their content).
Reference values are compared by their reference (i.e., their memory address).
*/

// Primitive value assignment
let x = 5;
let y = x; // Copying the value of x
x = 10; // Changing x does not affect y

console.log(x); // Output: 10
console.log(y); // Output: 5

// Reference value assignment
let obj1 = { name: "Alice" };
let obj2 = obj1; // Copying the reference of obj1
obj1.name = "Bob"; // Changing obj1 affects obj2

console.log(obj1.name); // Output: Bob
console.log(obj2.name); // Output: Bob
