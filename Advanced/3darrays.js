/*
 A 2D array, like a spreadsheet, expands this to having rows and columns, allowing you to organize items in a grid.

A 3D array takes this one step further. Instead of just a flat grid, imagine a box of these grids stacked on top of each other.  
This box has three dimensions:

Depth: The number of grids (layers) in the box.
Height: The number of rows in each grid.
Width: The number of columns in each grid.

*/

let threeDArray = [
    [ // First layer (index 0)
        [1, 2, 3],
        [4, 5, 6]
    ],
    [ // Second layer (index 1)
        [7, 8, 9],
        [10, 11, 12]
    ],
    [ // Third layer (index 2)
        [13, 14, 15],
        [16, 17, 18]
    ]
];

//[layer][row][column]

let element = threeDArray[1][0][2];
console.log(element); // Outputs: 9
