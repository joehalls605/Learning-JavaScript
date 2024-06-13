/*
Asynchronous operations allow tasks to be executed independently of the main program flow. 
This means that while one part of your code is waiting for something to finish (like fetching data from a server),
the rest of your code can continue to run. Asynchronous operations are crucial for building responsive and efficient web applications.
*/

// Example: Fetching data asynchronously
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    console.log('Fetched data:', data);
    // Process the fetched data here
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    // Handle errors here
  });
