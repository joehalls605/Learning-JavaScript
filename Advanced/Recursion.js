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


// Simple for loop:
function sumRange(n){
    let total = 0;
    for(let i = n; i > 0; i--){
        total += i;
    }
    return total;
}

// Recursive version:
function sumRangeRecursive(n){
    if(n <= 0){
        return total
    }
    return sumRangeRecursive(n - 1, total + n)
}

// What happens:
sumRangeRecursive(3, 0)
    sumRangeRecursive(2, 3)
        sumRangeRecursive(1, 5)
            sumRangeRecursive(0, 6)
            // returns 6, returns, 6, returns 6, returns 6


// These functions so far are easier to do with a for loop, but next one is something you would use recursion for.

function printChildren(t){

}

function printChildrenRecursive(t){
    if(t.children.length === 0){
        return;
    }
    t.children.forEach(child => {
        console.log(child.name)
        printChildrenRecursive(child)
    });
}

// What happens:
printChildrenRecursive("John")
    printChildrenRecursive("Jim")
        return
    printChildrenRecursive("Zoe")
            printChildrenRecursive("Kyle")
            return
            printChildrenRecursive("Sophia")
            return
    return
return

const tree = {
    name: "John",
    children: [
        {
            name: "Jim",
            children: []
        },
        {
            name: "Zoe",
            children: [
                { name: "Kyle", children: []},
                { name: "Sophia", children: []},
            ]
        }
    ]
}