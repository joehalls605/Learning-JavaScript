// 1. Initialize an Array:
// TODO: Initialize an array named `colors` containing the following colors: "red", "green", "blue", "yellow".

const colors = ["red", "blue", "green", "yellow"];

// 2. Access Array Elements:
// TODO: Access and log the third element of the `colors` array.

const thirdElement = colors[2];

// 3. Modify Array Elements:
// TODO: Change the second element of the `colors` array to "purple" and log the modified array.

colors[1] = "purple";
console.log(colors);

// 4. Add Elements to the End:
// TODO: Add "orange" and "pink" to the end of the `colors` array and log the updated array.

const addedColours = colors.push("orange", "pink");
console.log(colors);

// 5. Remove Elements from the Beginning:
// TODO: Remove the first element from the `colors` array and log the modified array.

colors.shift()
console.log(colors);

// 6. Use Array Methods:
// TODO: Use the `indexOf` method to find the index of "blue" in the `colors` array and log the result.

let indexOf = colors.indexOf("blue");
console.log(indexOf);

// 7. Slice and Log a Subarray:
// TODO: Create a new array named `secondaryColors` by using the `slice` method to extract elements from index 1 to 3 (inclusive) from the `colors` array. Log the `secondaryColors` array.

secondaryColors = [];
secondaryColors = colors.slice(0,2);
console.log(secondaryColors);

// 8. Check Array Inclusion:
// TODO: Check if "green" is included in the `colors` array using the `includes` method. Log the result.

const IsTrue = colors.includes("green");
console.log(IsTrue);

// 9. Map and Transform Elements:
// TODO: Use the `map` method to create a new array named `uppercaseColors` that contains the elements of `colors` in uppercase.

const uppercaseColors = colors.map().toUpperCase();

// 10. Filter Elements:
// TODO: Use the `filter` method to create a new array named `filteredColors` that contains only the colors with more than four letters.

filteredColors = colors.filter(color => color.length > 4);