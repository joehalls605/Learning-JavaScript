// RECURSION 

/* A FUNCTION THAT CALLS ITSELF, SOMEWHERE INSIDE OF THE FUNCTION.
You have an exit condition that jumps you out to stop the function calling itself over and over again.

The tricky part: you have to keep track of all the previous calls inside the recursion stack.
*/


// Simple for loop:
function countDown(n){
    for(let i = n; i > 0; i--){
        console.log(i);
    }
    console.log('Hooray')
}

// Recursive version:
function countDownRecursive(n){
    if(n <= 0){
        console.log("Horray");
        return 
    }
    console.log(n)
    countDownRecursive(n - 1);
}
// What happens:
countDownRecursive(3)
    countDownRecursive(2)
        countDownRecursive(1)
            countDownRecursive(0)
            // 3, 2, 1, hoorary!
            //return, then we return back into countDownRecursive(1)
            // it's now at the bottom countDownRecursive(n) function, so it keeps returning out from 0 - 3
            // return, return, return, return

