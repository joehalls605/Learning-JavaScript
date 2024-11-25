/*
The fetch function in JavaScript is used to make HTTP requests to servers. Typically to retrieve or send data.
It returns a promise that resolves to the reponse object representing the HTTP response to the request.

The most basic usage of fetch is to pass in a URL, and it will make the GET request to that URL by default.
*/

fetch("https://api.example.com/data").then(response =>{
    // Handle the response
}).catch(error => {
    // Handle erors (like network errors)
})

/*
Key aspects of fetch.

Fetch is asynchronous and returns a promise. This means it doesn't block the rest of the code from running. 
Instead, I can handle the result with the .then and .catch or use it with await in an async function.

The promise returned by a fetch resolves to a response object that contains information about the response. Such as:

status: HTTP status code of the response (200 for OK, 404 for not found)
ok: Boolean indicating if the response was succesful (status range in the 200-299)
headers: any headers included in the response
body: the actual content of the response, text, JSON etc.


To work with the content of the response, I need to call a method on the response object to parse the body.
Such as:
.json() - parses the response as JSON (returns a promise that resolves with a JavaScript object)
.text() - Reads the response as plain text
.blob() - Reads the response as binary data
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

