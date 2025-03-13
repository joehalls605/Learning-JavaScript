/* A shallow copy is a copy of an object or array where only the first level of data is duplicated
* If the original data contains nested objects or arrays, those nested references are still shared between the original and copied version.
*
* */

const original = {name: "Alice", details: {age: 30}};
const shallowCopy = {...original};

shallowCopy.name = "Bob"; // Changes only the copy
shallowCopy.details.age = 40; // Changes both the original and copy