/*
A promise in JavaScript is a way to handle things that take time, like downloading a file or making a network request. 
Instead of waiting for the task to finish, a promise lets you handle the result later. 
It represents something that will either succeed (complete) or fail (error) at some point in the future.

A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 
Promises provide a cleaner and more manageable way to work with asynchronous code, avoiding "callback hell" (the nested callbacks that can make code harder to read and maintain).

Here’s a simple breakdown:

Pending: The promise is still in progress. It hasn’t been completed or failed yet.
Fulfilled: The operation was successful, and the promise is completed.
Rejected: The operation failed, and the promise cannot be completed.


Imagine you want to order a pizza online. The promise is like a receipt for your order:

Pending: Your pizza is still being prepared.
Fulfilled: Your pizza is ready and delivered.
Rejected: Something went wrong, and the pizza wasn’t delivered.

Promises help make asynchronous (delayed) code more understandable and manageable by allowing you to handle the "success" or "failure" of tasks when they are done. 
This way, your code doesn’t get stuck waiting, and you can write cleaner, easier-to-read programs.
*/

// Promise outline
let myPromise = new Promise(function(resolve, reject) {
    let success = true;
    if(success){
        resolve("The task worked!");
    }
    else{
        reject("The task failed");
    }
})

// Handling promises
// then() can be used for success and catch for failure

// This creates the promise and sets up the rules for whether it passes or fails.
let pieOrder = new Promise((resolve, reject) => {
    if(pieIsReady){
        resolve("Your pie is ready!");
    }
    else{
        reject("We ran out of pie");
    }
});
// Now you define what to do when the promise finishes
pieOrder.then(message => {
    console.log(message); // matches up with resolve
}).catch(error => {
    console.log(error); // matches up with reject
})


// Creating a simple promise
let pizzaOrder = new Promise((resolve, reject) => {
    let pizzaIsReady = true;

    if(pizzaIsReady){
        resolve("Your pizza is ready!");
    }
    else{
        reject("Oops we ran out of pizza!");
    }
});


// Then and catch are used to handle the result
// The message is the result which is output

pizzaOrder.then(message => { // then runs if the pizzaIsReady is true
    console.log(message);
}).catch(error => { // runs if pizzaIsReady is false
    console.log(error);
})


let pieOrder = new Promise((resolve, reject) => {
    let pieIsReady = true;

    if(pieIsReady){
        resolve("Your pie is ready!");
    }
    else{
        reject("We ran out of pie!");
    }
})

pieOrder.then(message => {
    console.log(message); // handles the resolve of the promise
}).catch(error => { // handles the rejection of the promise
    console.log(error);
})