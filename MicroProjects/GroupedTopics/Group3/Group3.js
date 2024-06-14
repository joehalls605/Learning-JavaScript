/*
Topics Covered:
1. Data Structures: Declaration and manipulation
2. Array methods: push, pop, shift, unshift, slice
3. Multidimensional arrays: 2D and 3D arrays
4. High-order functions: map, filter, reduce
*/

// 1. Data Structures: Declaration and manipulation
let array = [1,4,6,7,8];

array.push(6); // adds element to the end

array.pop(); // pops item off the end

array.shift(); // removes the first element

array.unshift(1); // adds element to the beginning

let slicedArray = array.slice(0, 1);

// Multi dimensional arrays
let matrix2D = [
[1,2,3],
[4,5,6],
[7,5,3]
];

let matrix3d = [
    [
        [1,2,3]
        [4,6,8]
    ]
    [
        [6,5,3]
        [6,5,3]
    ]
];

const itemLocation = matrix2D[0][1]


// high order functions: map, filter, reduce


// creating a new array with each element multiplied by 2
let doubledArray = array.map(function(num){
    return num * 2;
})

// using filter to create a new array with elements greater than 2
let filteredArray = array.filter(function(num){
    return num > 2;
});

let sum = array.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}, 0)
