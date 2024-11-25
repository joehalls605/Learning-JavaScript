// Bitwise AND (&)
/*
Bitwise AND (&)
Purpose: Takes two numbers and looks at their binary (base-2) representation bit by bit.
Rule: If both numbers have a 1 in the same position, the result will have a 1 in that position. Otherwise, it will have a 0.
*/
let resultAND = 5 & 3; // 0101 & 0011 = 0001 (equals 1 in decimal)
console.log("Bitwise AND:", resultAND); // Outputs: 1

/*
Bitwise OR (|)
Purpose: Takes two numbers and looks at their binary representation bit by bit.
Rule: If at least one of the numbers has a 1 in a specific position, the result will have a 1 in that position. If both have 0s, the result will have a 0.
*/

let resultOR = 5 | 3; // 0101 | 0011 = 0111 (equals 7 in decimal)
console.log("Bitwise OR:", resultOR); // Outputs: 7