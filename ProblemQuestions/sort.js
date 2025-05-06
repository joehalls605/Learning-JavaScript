let scores = [88, 45, 67, 92, 100, 32, 76]

const ascendingSort = [...scores].sort((a, b) => a - b);
console.log(ascendingSort);

const descendingSort = [...scores].sort((a,b) => b - a);
console.log(descendingSort);

let names = ["Zoe", "Alexander", "Mia", "John", "Isabella", "Ben"];

const sortedByLengthAscending = [...names].sort((a,b) => a.length - b.length);
console.log(sortedByLengthAscending);
const sortedByLengthDescending = [...names].sort((a,b) => b.length - a.length);
console.log(sortedByLengthDescending);

let products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 600 },
    { name: "Monitor", price: 300 },
    { name: "Keyboard", price: 100 }
];

const sortedByCheapest = [...products].sort((a, b) => a.price - b.price);
console.log(sortedByCheapest);

const sortedByExpensive = [...products].sort((a,b) => b.price - a.price);
console.log(sortedByExpensive);

//

// 1.
const numbers = [10,20,33,4,1,2];
numbers.sort((a,b) => a - b); // If it returns negative, a comes before b, if it returns positive, b comes before a.

// 2.

const words = ["Apple", "Pear", "Tomato", "Grape"];
words.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

// 3.

const people = [
    { name: 'John', age: 25 },
    { name: 'Sara', age: 22 },
    { name: 'Kate', age: 30 }
];
people.sort((a, b) => a.age - b.age);

// 4.
const numbers = [34, 12, 5, 99, 7];
numbers.sort((a,b) => b - a);

// 5.

const words = ['elephant', 'dog', 'cat', 'hippopotamus', 'mouse'];
words.sort((a, b) => a.length - b.length);


