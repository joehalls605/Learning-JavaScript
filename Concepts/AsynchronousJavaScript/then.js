/*
The .then() method is used with JavaScript promises to handle the result once the promise is fulfilled (i.e., the asynchronous operation has completed successfully).

Attaching .then() to a Promise: When you call a function that returns a promise (like fetch), you can use .then() to say, "Once this promise is fulfilled, do something with the result."

Accessing the Result: The .then() method takes a function as an argument. This function receives the result of the promise as its input (often called the "resolved value" or "fulfilled value"). This lets you work with the data that you were waiting for.

Chaining .then() Calls: Since .then() itself returns a promise, you can chain multiple .then() calls in a row. This allows you to process the result step-by-step.
*/

fetch('https://api.example.com/data')
    .then(response => {
        // The first `.then()` is called when `fetch` completes
        return response.json(); // This also returns a promise
    })
    .then(data => {
        // This `.then()` is called once `response.json()` is done
        console.log(data); // Log the parsed JSON data
    })
    .catch(error => {
        // This `.catch()` handles any error that occurred in the chain
        console.error('Fetch error:', error);
    });
