/*
AJAX stands for Asynchronous JavaScript and XML. 
It's a technique used in web development to send and receive data from a web server asynchronously, meaning it can happen in the background without reloading the entire webpage.

A breakdown of key components:
Asynchronous: AJAX allows web pages to request and load data from a server after the page has loaded. This means users can interact with the page while data is being fetched in the background.

JavaScript: AJAX uses JavaScript to make requests to the server and handle the server's response. JavaScript can update the webpage with the retrieved data dynamically.

XMLHttpRequest (XHR): This is the core technology behind AJAX. It's an API in JavaScript that allows you to make HTTP requests to a server from within a web page. Despite its name, it can handle responses in formats other than XML, such as JSON, plain text, or HTML.

Data Interchange Formats: While XML was commonly used in the past (hence the name), nowadays JSON (JavaScript Object Notation) is more frequently used due to its simplicity and ease of use with JavaScript.

Updating Parts of a Webpage: AJAX is often used to update parts of a webpage without reloading the entire page. This can create a smoother and more interactive user experience.

In essence, AJAX enables web applications to retrieve data from a server asynchronously and update parts of the webpage dynamically without needing to reload the entire page. This capability is fundamental in creating responsive and interactive web applications.


Mock html linked to this document:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>AJAX Example</title>
</head>
<body>
    <h2>Fetching Data with AJAX</h2>
    <div id="output">
        <p>Loading...</p>
    </div>
*/

function fetchData(){

    // Step 1, create an XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Step 2, define a callback function to handle the responses
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            // Step 5, process the server response
            var response = JSON.parse(xhr.responseText);
            var outputDiv = document.getElementById("output");
            outputDiv.innerHTML = "<p>Data fetched:</p><pre>" + JSON.stringify(response, null, 2) + "</pre>";
        }
    };

    // Step 3, configure the request (GET request to JSON API)
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

    // Step 4, send the request
    xhr.send();

    // Trigger the fetchData function when the page loads (for demonstration)
    window.onload = fetchData;

}

