
let numbers = [1,3,4,5,6];

numbers.push(6); // adds an element at the end.

numbers.pop(); // removes the last element.

numbers.unshift(0); // Add an element at the beginning, return the length

numbers.shift(); // Remove first element

// Methods
let reversedNumbers = numbers.reverse(); // Revearse the array
console.log();

let sortedNumbers = numbers.sort((a,b) => {
    a - b;
}) 


let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log("Element at matrix", matrix[1]);


let cube = [
    [
        [1,2,3],
        [4,5,6]
    ],
    [
        [7,8,9],
        [10,11,12]
    ]
]

console.log("Element at cube [1][1][2]", cube[1][1][2]);

let doubledNumbers = numbers.map(num => num * 2);

let doubledNumbers2 = numbers.map(function(num){
        const doubledNumber = num * 2;
        return doubledNumber;
}) 

let firstEvenNumber = numbers.find(num => num % 2 == 0);


let sum = numbers.reduce((acc, curr) => acc + curr, 0);

let includesThree = numbers.includes(3);

let slicedArray = numbers.slice(1,4);



