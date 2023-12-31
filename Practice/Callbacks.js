// 1. Using a Callback Function:
// TODO: Use the setTimeout function to log "Hello, Callbacks!" after 2000 milliseconds.
setTimeout(()=>{
    console.log("Hello", 2000);
})

// 2. Array `forEach` with a Callback:
const numbers = [1, 2, 3, 4, 5];
// TODO: Use the forEach method to log each number multiplied by 2.
numbers.forEach(num => {
    console.log(num * 2);
});


// 3. Callback with Arguments:
function calculate(num1, num2, callback) {
    callback(num1, num2);
}

// 4. Event Listener with Callback:
const button = document.getElementById("myButton");
// TODO: Add a click event listener to the button and log "Button clicked!" when clicked.

button.addEventListener("click", ()=>{
    console.log("button clicked!");
});

// Intermediate Code Questions:

// 5. Callback in a Promise:
// TODO: Create a Promise that resolves after 3000 milliseconds and log "Promise resolved!" using a callback.

const promiseWithCallback = new Promise(resolve => {
    setTimeout(()=>{
        resolve();
        console.log("Promise resolved")
    }, 3000);
});

// 6. Callback Chain with `setTimeout`:
// TODO: Implement a callback chain where each function logs a message with a delay.
// Log messages in the following order: "One", "Two", "Three".

const logMessage = (message, delay, callback) => {
    setTimeout(()=>{
        console.log(message);
        callback();
    }, delay);
};

// 7. Handling Errors with Callbacks:
function calculateWithCallback(num1, num2, successCallback, errorCallback) {
    // TODO: Modify this function to handle errors by calling the errorCallback.
    if( typeof num1 != 'number' || typeof num2 != 'number'){
        errorCallback("Invalid number")
    }
    else{
        const result = num1 + num2;
        successCallback(result);
    }
}

// Advanced Code Questions:

// 8. Promise with Multiple Callbacks:
const promiseWithCallbacks = new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, 2000);
});
// TODO: Use two different callbacks in the `then` method to log "Resolved!" and "All done!".

// 9. Async/Await with Callbacks:
async function calculateAsync(num1, num2, callback) {
    // TODO: Use the async/await syntax to return the result of applying the callback to the two numbers.
}

// 10. Handling Multiple Promises with Callbacks:
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, 3000);
});