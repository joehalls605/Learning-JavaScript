// CALLBACKS

/* Callbacks in JavaScript are functions that are passed as arguments to other functions and are executed after the completion of an asynchronous operation or at a specified time. 
Callbacks are commonly used in scenarios like event handling, AJAX requests, and setTimeout. */


// Function with a callback parameter
function greet(name, callback) {
    // Print a greeting message with the provided name
    console.log(`Hello, ${name}!`);
    
    // Call the provided callback function
    callback(); // This line executes the callback function
}

// Callback function
function sayGoodbye() {
    // Print a goodbye message
    console.log("Goodbye!");
}

// Using the greet function with a callback
greet("John", sayGoodbye);
