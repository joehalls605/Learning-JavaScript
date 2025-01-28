// Primitive Values Example
console.log("=== Primitive Values ===");
let a = 10; // Primitive type: Number
let b = a;  // b gets a COPY of a's value
b = 20;     // Changing b doesn't affect a

console.log("a:", a); // Output: 10
console.log("b:", b); // Output: 20

// String Example (also a primitive)
let str1 = "Hello";
let str2 = str1;  // str2 gets a COPY of str1's value
str2 = "World";   // Changing str2 doesn't affect str1

console.log("str1:", str1); // Output: Hello
console.log("str2:", str2); // Output: World


// Reference Values Example

console.log("\n=== Reference Values ===");
let obj1 = { name: "Alice" }; // Reference type: Object
let obj2 = obj1;              // obj2 gets a REFERENCE to obj1

obj2.name = "Bob";            // Changing obj2 affects obj1 (same object in memory)
console.log("obj1:", obj1);   // Output: { name: "Bob" }
console.log("obj2:", obj2);   // Output: { name: "Bob" }

// Array Example (also a reference type)
let arr1 = [1, 2, 3];         // Reference type: Array
let arr2 = arr1;              // arr2 gets a REFERENCE to arr1

arr2.push(4);                 // Modifying arr2 affects arr1 (same array in memory)
console.log("arr1:", arr1);   // Output: [1, 2, 3, 4]
console.log("arr2:", arr2);   // Output: [1, 2, 3, 4]

// Creating a Shallow Copy of an Object (to avoid reference sharing)
console.log("\n=== Shallow Copy Example ===");
let originalObj = { color: "red" };
let shallowCopy = { ...originalObj }; // Shallow copy using spread operator

shallowCopy.color = "blue";           // Changing shallowCopy doesn't affect originalObj
console.log("originalObj:", originalObj); // Output: { color: "red" }
console.log("shallowCopy:", shallowCopy); // Output: { color: "blue" }

// Creating a Shallow Copy of an Array
let originalArray = [10, 20, 30];
let shallowArrayCopy = [...originalArray]; // Shallow copy using spread operator

shallowArrayCopy.push(40);                // Modifying shallowArrayCopy doesn't affect originalArray
console.log("originalArray:", originalArray); // Output: [10, 20, 30]
console.log("shallowArrayCopy:", shallowArrayCopy); // Output: [10, 20, 30, 40]
