/*
Async:
The async keyword is used to define an asynchronous (not at the same time) function. 
An asynchronous function is a function that operates asynchronously via the event loop, allowing other operations to continue before the function completes. 
When you define a function with the async keyword, it automatically returns a Promise.
*/

async function fetchData() {
    // code to fetch data
  }

  /*
Await:
The await keyword can only be used inside an async function. 
It is used to pause the execution of the async function until the Promise it is awaiting is resolved or rejected. 
Once the Promise is resolved, the await expression evaluates to the resolved value, allowing the function to continue executing.
Here's an example:
  */

async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  }

  /*
In the above example, the execution of the fetchData function is paused on the first await until the Promise returned by fetch is resolved. Once resolved, the execution continues, and the resolved value (the response) is assigned to the response variable. The second await pauses the execution again until the response.json() Promise is resolved, and the JSON data is assigned to the data variable.
The main benefit of using async/await is that it makes asynchronous code look and behave more like synchronous code, reducing the need for complex callback functions or Promise chaining. It allows you to write code that reads more sequentially, making it easier to understand and maintain.
However, it's important to note that using await inside an async function still creates a Promise under the hood. If you need to handle errors or combine multiple Promises, you can still take advantage of Promise methods like catch and Promise.all.
  */