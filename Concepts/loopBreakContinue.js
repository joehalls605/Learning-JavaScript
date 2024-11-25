/*
Loop contol statements such as break and continue are used to alter the flow of loops.
They provide mechanisms to manage how loops iterate over elements or how many iterations are performed.

The break statement is used to terminate a loop immediately when a certain condition is met.
The continue statement is used to skip the current iteration of the loop and proceed to the next iteration.
*/

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Skip the current iteration when i equals 3
    }
    console.log(i); // Outputs: 1, 2, 4, 5
}

for(let i = 1; i <= 9; i++){
    if(i === 5){
        continue // Move to the next iteration 
    }
    if( i === 8){
        break; // Exit the loop
    }
}
