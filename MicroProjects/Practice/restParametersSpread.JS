// 1. Spread Syntax with Arrays:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// TODO: Create a new array using spread syntax that combines elements from arr1 and arr2. Log the result.

const newArray = [...arr1, ...arr2];
console.log(newArray);

// 2. Spread Syntax with Objects:
const person = { name: 'John', age: 25 };
const details = { job: 'Developer', city: 'Example City' };
// TODO: Create a new object using spread syntax that combines properties from the person and details objects. Log the result.

const newObject = {...person, ...details}
console.log(newObject)

// 3. Function with Spread Syntax:
function concatenateStrings(...strings) {
    // TODO: Use spread syntax to concatenate all the strings passed as arguments. Log the result.
    const newStrings = [...strings]
    console.log(newStrings);
}

// 4. Copying an Array with Spread Syntax:
const originalArray = [10, 20, 30, 40, 50];
// TODO: Create a new array using spread syntax that is a copy of the originalArray. Log both arrays to verify the copy.
const newArray1 = [...originalArray];
console.log(originalArray, newArray1);

// 5. Merging Arrays with Spread Syntax:
const arr3 = [7, 8, 9];
// TODO: Merge arr1, arr2, and arr3 into a new array using spread syntax. Log the result.
const newArray3 = [...arr1, ...arr2, ...arr3];
console.log(newArray3);


// 6. Updating Object Properties with Spread Syntax:
const student = { name: 'Alice', grade: 'A', age: 22 };
// TODO: Create a new object using spread syntax that updates the age property to 23. Log both objects to verify the update.
const newObject2 = {...student};
newObject2.age = 23;
console.log(student, newObject2);