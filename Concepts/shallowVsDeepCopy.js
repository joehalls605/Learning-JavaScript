/*
A shallow copy and a deep copy are two ways to duplicate an object in programming.
But they handle references to nested objects differently.

Shallow copy:

Definition:
Creates a new object, but it does not create copies of objects that are referenced within the original object.
So it doesn't copy the nested objects or arrays. Instead it just shares those inner objects between the original and the copy.

Result:
Changes to the inside of the copied version affect the original because they both use the same inner objects.
*/

// Original object with nested data (an array inside another array)
const original = [[1,2,3], [4,5,6]];

// Make a shallow copy
const shallowCopy = [...original];

// Change something inside the copy
shallowCopy[0][0] = 99;

console.log(original); // [[99, 2, 3], [4, 5, 6]] - The original was also changed!
console.log(shallowCopy); // [[99, 2, 3], [4, 5, 6]]


/*
Deep Copy

What It Does: A deep copy duplicates everything, including the “inside” stuff (nested objects or arrays). The copy becomes fully independent of the original.
Result: Changes to the copied version do not affect the original.
*/

// Original object with nested data
const original2 = [[1, 2, 3], [4, 5, 6]];

// Make a deep copy
const deepCopy = structuredClone(original);

// Change something inside the copy
deepCopy[0][0] = 99;

console.log(original); // [[1, 2, 3], [4, 5, 6]] - The original stays the same!
console.log(deepCopy); // [[99, 2, 3], [4, 5, 6]]
