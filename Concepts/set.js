// Create a new Set from an array with some duplicate values

const numbers = [1, 2, 3, 1, 2, 4, 5, 5];

const uniqueNumbers = new Set(numbers);

console.log("Original array with duplicates:", numbers);
console.log("Set with unique values:", uniqueNumbers);

// Convert a Set back into an array
const uniqueArray = [...uniqueNumbers];

// Adding new values to the Set

uniqueNumbers.add(6);
uniqueNumbers.add(8);

// Attempting to add duplicates doesn't change the Set
uniqueNumbers.add(3); // 3 is already in the Set, so it won't be added

// Removing a value from the Set
uniqueNumbers.delete(5);

