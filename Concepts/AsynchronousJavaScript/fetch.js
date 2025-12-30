/*
* Fetch() is a built-in JavaScript function for making HTTP requests (network requests)
* It returns a Promise that resolves to a Response object when the server responds
* You can use it to request data from APIs, HTML pages, images, etc.
* ? start of query parameters
* */

// Basic usage:

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));

// Using fetch with async await

const getPost = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        console.log(data);
    } catch (error){
        console.error("Error", error);
    }
}

getPost();