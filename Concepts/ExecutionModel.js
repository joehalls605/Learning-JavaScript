// This is just a program that shows the JS execution call stack

console.log("start"); // Step 1: Synchronous, goes to the call stack

setTimeout(()=>{
    console.log("Timeout callback"); //// Step 4: Goes to callback queue, runs after microtasks
}, 0);

Promise.resolve().then(()=>{
    console.log("Promise callback"); // Step 3: Microtask, runs before timeout
});

console.log("End"); // Step 2: Synchronous, continues execution




