// Success status
async function postData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            })
        });

        if (response.status === 200) {
            const data = await response.json();
            console.log('Success:', data);
        } else {
            console.log('Unexpected status code:', response.status);
        }
    } catch (error) {
        console.log('Error:', error);
    }
}
postData();

// redirection
async function fetchData() {
    try {
        // response object represents the result of the HTTP request made to the server
        const response = await fetch('https://httpbin.org/redirect/1'); // A URL that redirects

        if (response.status === 301) {
            console.log('Redirected:', response.url);
        } else {
            console.log('No redirection occurred.');
        }
    } catch (error) {
        console.log('Error:', error);
    }
}
fetchData();


// With Express, you can set the status code of a response using res.status
// This code does not correspond with the code above.

const express = require("express");
const app = express();

// app.get defines a route htat the server responds to when a GET request is made to the specified path URL
app.get("/", (req, res) => {
    res.status(200).send("success!"); // status 200 OK
})

app.get("/not-found", (req, res) => {
    res.status(404).send("resource not found"); // status 404 not found
});

app.get("/unauthorised", (req, res) => {
    res.status(401).send("unauthorised");
})

app.get("/server-error", (req, res) => {
    res.status(500).send("Internal server error");
});

app.listen(3000, () => {
    console.log("Server is running on port 300");
});