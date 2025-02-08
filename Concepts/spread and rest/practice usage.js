// REST
// GET THE REST

function collectArguments(...args){
    console.log("Collected arguments:", args); // Collects all passed arguments into an array
}

collectArguments(1,2,3,4,5);
// Output: [1,2,3,4,5]


// Using Rest with destructuring to collect remaining array elements
const array = [1,2,3,4,5];
const [first, second, ...rest] = array;


// SPREAD
// SPREAD AND EXPAND

// Using Spread to expand elements of an array into a new array

const numbers = [1,2,3];
const expandedArray = [...numbers, 4, 5]; // // Spreads out the elements and adds more

//  Using Spread to copy an array (creates a new reference)

const copiedArray = [...numbers]; // This actually creates a shallow copy, a new version.
// const copiedArray = numbers; - This would just copy the reference of the array.

// Using Spread to combine multiple arrays

const array1 = [1,2];
const array2 = [3,4];
const combinedArray = [...array1, ...array2]; // Without the spread operator, you would just get the references to the arrays inside the new array, not their contents.

// Using Spread with Objects

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combinedObject = {...obj1, ...obj2};

// Using Spread to merge arrays into a Set to remove duplicates

const arrayWithDuplicates = [1, 2, 3, 2, 1];
const uniqueSet = new Set([...arrayWithDuplicates]);