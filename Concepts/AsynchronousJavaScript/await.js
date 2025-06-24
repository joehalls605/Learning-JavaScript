/*
The await keyword in JavaScript is used to pause the execution of an asynchronous function (async function) until a Promise is resolved (either fulfilled or rejected).

Here's how await works:
Pauses Execution: When await is used before a Promise (like the result of fetch), it makes the function wait until that Promise is resolved.

Handles Promises: If the Promise resolves successfully, the await expression returns the resolved value. If the Promise is rejected (e.g., due to a network issue or API error), the code will throw an error unless it's handled with a try...catch block.

Simplifies Code: Without await, you would have to chain .then() and .catch() for handling the result and errors. With await, the code becomes easier to read, almost like writing synchronous code.

Example Without await (Using .then()):
*/

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);  // Handle data here
  })
  .catch(error => {
    console.error('Error:', error);
  });

  // With Await instead

  async function getData(){
    try{
        const response = await fetch("https://api.example.com/data");
        const data = await response.json(); // Wait until JSON is parsed
    } catch (error) {
        console.error('Error:', error);
    }
  }