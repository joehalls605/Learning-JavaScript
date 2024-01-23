/* Asynchronous operation is a task or process that operates independtly of the main program flow.
This enables other tasks to execute concurrently. In programming, operations can be broadly categorised into two types.

synchronous and asynchronous.

In synchronous operations, tasks are executed in sequence, one after the other.
Each task must complete before the next one begins.
The program waits for each operation to finish before moving on to the next.


In asynchronous operations, tasks can be initiated and continue their execution without waiting for the previous tasks to complete.
Asynchronous operations enable non-blocking behavior, allowing the program to perform other tasks while waiting for certain operations to finish.
Callback functions, Promises, and async/await are common mechanisms used to handle asynchronous operations in programming.
*/

//EXAMPLE

console.log("Start")

setTimeout(()=>{
    console.loog("Async operation completed after 2000 milliseconds")
},2000)

console.log("End");

// Output:
// Start
// End
// Async operation completed after 2000 milliseconds

/* Working with data
Using async with data inolves asynchronous operations such as fetching data from external source, handling promises
or performing other non blocking tasks.
The async keyword is used to define asynchronous functions, and await is used within these functions to pause execution until a promise is resolved.
This allows for readable and consise asynchronous code.

Example:
*/


// Example asynchronous function using async/await
async function fetchData() {
    try {
        // Simulating an asynchronous operation, like fetching data from an API
        const response = await fetch('https://api.example.com/data');
        
        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        // Parse the JSON data
        const data = await response.json();

        // Process the data or return it
        return data;
    } catch (error) {
        console.error('Error during data fetch:', error.message);
        throw error; // Re-throw the error to handle it elsewhere, if needed
    }
}

// Using the asynchronous function

async function processData(){
    try{
        const result = await fetchData();
        console.log("data", result);
           // Further processing or rendering can be done with the fetched data
    }
    catch(error){
        console.error("error processing the data", error.message);
    }
}

// Invoke the function
processData();