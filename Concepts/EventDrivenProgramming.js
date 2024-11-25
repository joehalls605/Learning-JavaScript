/*
Events: Actions that occur, like clicks, typing, or receiving data.
Event Listeners: Functions that "listen" for specific events and trigger when those events occur.
Event Handlers (Callbacks): Functions that are called in response to events.

Let’s say we have a button on a webpage, and we want to show a message when it’s clicked.

<button id="myButton">Click Me</button>
<p id="message"></p>
*/

// Select the button element
const button = document.getElementById('myButton');
const message = document.getElementById('message');

// Add an event listener for the 'click' event
button.addEventListener('click', function() {
    message.textContent = "Button was clicked!";
});

/*
Characteristics of Event-Driven Programming
Asynchronous: Code doesn’t execute sequentially but waits for events to trigger specific actions.
Decoupled: Event handlers are separate from the main program logic, making the code modular and flexible.
*/

