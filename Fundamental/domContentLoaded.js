/*
DOMContentLoaded is an event in javascript that fires when the initial HTML document has been completely loaded and parsed, 
without waiting for stylesheets, images and subframes to finish loading.
This means that the DOM is ready to be manipulated.

A simple explanation:

1. HTML Parsing: When a web page is loading, the browser starts by parsing the HTML document.

2. DOMContentLoaded Event: As soon as the browser has finished parsing the HTML and has constructed the DOM, but before other resources like images and stylesheets are fully loaded, the "DOMContentLoaded" event is fired.

3. JavaScript Execution: You can use this event to execute JavaScript code that relies on the DOM being ready, without waiting for the entire page (including images and stylesheets) to load.
*/

// Using DOMContentLoaded:

document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM fully loaded and parsed");
});

/*
<!DOCTYPE html>
<html>
<head>
    <title>Welcome Page</title>
</head>
<body>
    <h1 id="welcome-message">Welcome to my website!</h1>
    <p>This is a simple example of using DOMContentLoaded.</p>
    <script src="script.js"></script>
</body>
</html>
*/

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('welcome-message').innerText = 'Hello, the DOM is now fully loaded!';
});
