/* 
Primitive vs reference values.

Primitive values are simple data types that store their values in memory.
Most primitive values are immutable - number, string, boolean etc.

These valuesa are stored directly in memory locations and when you assign one primitive to another, you create a copy of the value.
Changing one value does not affect the other.

Reference values are more complex data types that store references or addresses to the location memory where the the data is stored.
When you assign a reference value to a variable, you are not copying the actual data but instead creating a refrence to that data.

Objects, Arrays, Functions
*/


// Primitive Value

var x = 10;
var y = x;
x = 20;
console.log(y); // y = 10;

// Reference Value

var obj1 = {name: "John"};
var obj2 = obj1;
obj1.name = "Jane";

console.log(obj2.name) // "Jane"



