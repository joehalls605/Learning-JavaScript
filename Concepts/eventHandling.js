/*
Event handling in JavaScript involves detecting and responding to user interactions or other events that occur in the browser.

Basic Concepts
- Event: An action or occurrence recognized by the browser (e.g., a mouse click, keypress, or page load).
- Event Handler (Event Listener): A function that runs in response to a specific event.

How It Works
Select an Element: Identify the HTML element you want to interact with.
Add an Event Listener: Attach a function to the element that will run when the event occurs.


HTML:
<button id="myButton">Click Me</button>
<p id="message"></p>
*/

// Select the button element
let button = document.getElementById('myButton');

// Define the event handler function
function showMessage() {
    let message = document.getElementById('message');
    message.textContent = "Button was clicked!";
}

// Attach the event handler to the button's click event
button.addEventListener('click', showMessage);


/*
<div id="hoverArea" style="width: 200px; height: 100px; background-color: lightblue;">Hover over me!</div>
<p id="hoverMessage"></p>
*/

let hoverArea = document.getElementById('hoverArea');

function displayHoverMessage() {
    let hoverMessage = document.getElementById('hoverMessage');
    hoverMessage.textContent = "Mouse is over the area!";
}

hoverArea.addEventListener('mouseover', displayHoverMessage);


/*
<input type="text" id="inputField" placeholder="Type something...">
<p id="keyMessage"></p>
*/

let inputField = document.getElementById('inputField');

function displayKeyMessage(event) {
    let keyMessage = document.getElementById('keyMessage');
    keyMessage.textContent = "You pressed the key: " + event.key;
}

inputField.addEventListener('keypress', displayKeyMessage);
