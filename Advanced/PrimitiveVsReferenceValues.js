/* 
Primitive vs reference values.

Primitive values are basic data types like number, string, and boolean, which store their values directly in memory. 
They are immutable, meaning their values cannot be changed once created.

When you assign a primitive value to another variable, a copy of the value is made. 
Any changes to one variable do not affect the other.
*/

var x = 10;
var y = x; // y gets a copy of x's value
x = 20;
console.log(y); // Output: 10


/* 
Reference values include complex data types like Objects, Arrays, and Functions. 
Instead of storing the actual data in memory, they store a reference (or address) to the location in memory where the data is stored.

When you assign a reference value to a variable, you’re copying the reference, not the actual data. 
Changes made to one variable affect the other because they point to the same memory location.
*/

var obj1 = {name: "John"};
var obj2 = obj1;
obj1.name = "Jane";

console.log(obj2.name) // "Jane"



