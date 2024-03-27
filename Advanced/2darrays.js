/*
A 2D array is also known as a two-dimensional array, is an array of arrays in javascript.
Unlike a one-dimensional array, which is a collection of elements arranged in a single row, a 2D array orgnaises these into rows and columns.
Forming a grid like struture

In simpler terms, you can think of a 2D array as a table or grid, where each cell can hold a value, 
and you can access individual cells by specifying their row and column indices.
*/

var grid = [
    [1,2,3]
    [4,5,6]
    [7,8,9]
];

// Accessing elements

console.log(grid[0][0]); // output 1
console.log(grid[1][2]) // output 6

// Modifying elements
grid[1][1] = 10;
console.log(grid[1][1]); // Output: 10

// Looping through elements
for (var i = 0; i < grid.length; i++){ // OUTER LOOP, iterates some of rows
    for(var j = 0; j < grid[i].length; j++){  // INNER LOOP, iterates over each column in that row
        console.log(grid[i][j]);
    }
}