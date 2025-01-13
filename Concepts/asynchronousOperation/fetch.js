/*
The fetch function in JavaScript is used to make requests to servers, like getting or sending data. It returns a promise that will eventually give us the server's response.
It returns a promise that resolves to the reponse object representing the HTTP response to the request.

The basic use of fetch is to provide a URL, and it will automatically send a GET request to that URL.
*/

fetch("https://api.example.com/data")
  .then(response => {
    // Handle the response
  })
  .catch(error => {
    // Handle errors (e.g., network issues)
  });


/*
Key aspects of fetch.

Fetch is asynchronous: It doesn't stop the rest of the code from running. 
Instead, you handle the result later with .then or .catch, or use await in an async function.

Returns a promise: A promise is an object that represents the result of an operation that hasn't completed yet.

The response object: After the promise resolves, the response object contains:
status: The HTTP status code (e.g., 200 means OK, 404 means not found)
ok: A boolean that’s true if the status code is between 200-299 (successful)
headers: The headers sent back with the response
body: The actual content, which could be text, JSON, or other types of data
To get the content from the response, we need to call a method, such as:

.json(): Parses the response as JSON.
To parse JSON means to convert a JSON (JavaScript Object Notation) string into a JavaScript object that you can work with in your code.
.text(): Reads the response as plain text
.blob(): Reads the response as binary data
*/

fetch("https://api.example.com/data").then(response =>{
    if(!response.ok){
        throw new error("Network response was not ok");
    }
    return response.json(); // Parse JSON data
}).then(data => {
    console.log(data);
}).catch(error =>{
    console.log("fetch error", error);
});

/*
.then: It is called on a promise to specify what should happen when the promise resolves (i.e., when the asynchronous task is complete). It receives the resolved value (in this case, the response from the fetch) as an argument.
*/

/*
Fetch only rejects a promise when there is a network error. If the server responds with HTTP status code like  404, or 500, fetch will not reject.
So it is up to me to handle such cases by using reponse.ok or checking response.status

Fetch can also make different types of HTTP requests (POST, PUT, DELETE) by passing an options object as second argument.
*/

fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ key: 'value' }) // Send data as JSON
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Fetch error:', error));

