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
