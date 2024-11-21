/* .includes is useful in JavaScript for checking if an array 
or a string contains a specific element or substring.
It returns true if the element is found, and false otherwise.
*/

const fruits = ["apple", "banana", "orange", "grape"];

const outputTrue = fruits.includes("orange"); // Output: true
const outputFalse = fruits.includes("pear"); // Output: false

const sentence = "The quick brown fox jumps over the lazy dog";

console.log(sentence.includes('fox'));  // Output: true

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];

  console.log(users.includes({id: 2, name: "Bob"})) // Output: false