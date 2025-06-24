/*
2D Array
A 2D array in JavaScript is an array of arrays. It's like a table with rows and columns.
*/

let twoDArray = [
    [1, 2, 3],  // Row 0
    [4, 5, 6],  // Row 1
    [7, 8, 9]   // Row 2
];

// Accessing elements in a 2D array
console.log(twoDArray[0][1]); // Outputs: 2 (first row, second column)
console.log(twoDArray[2][0]); // Outputs: 7 (third row, first column)

/*
A 3D array in JavaScript is an array of arrays. You can think of it as a stack of 2D grids.
*/

let threeDArray = [
    [ // First layer (index 0)
        [1, 2, 3],  // Row 0
        [4, 5, 6]   // Row 1
    ],
    [ // Second layer (index 1)
        [7, 8, 9],  // Row 0
        [10, 11, 12] // Row 1
    ],
    [ // Third layer (index 2)
        [13, 14, 15], // Row 0
        [16, 17, 18]  // Row 1
    ]
];

// Accessing elements in a 3D array
console.log(threeDArray[1][0][2]); // Outputs: 9 (second layer, first row, third column)
console.log(threeDArray[2][1][1]); // Outputs: 17 (third layer, second row, second column)
