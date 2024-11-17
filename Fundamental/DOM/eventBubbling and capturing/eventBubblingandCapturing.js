/*
Event Phases in Simple Terms
When an event (like a click) happens on a webpage, it doesn’t just stop at the element you clicked. 

It actually moves through three phases:


1. Capturing Phase: The event starts at the root of the DOM (often the window or document) and travels down the DOM tree toward the target element.
2. Target Phase: The event reaches the actual target element, the one that initiated the event (for example, a button that was clicked).
3. Bubbling Phase: The event then travels back up the DOM tree to the root, retracing its path in reverse.
Default Behavior of Event Flow
In most cases, when you add an event listener to an element, the default behavior is to listen during the bubbling phase only, unless explicitly set otherwise. 

Here's a breakdown of the key points in default behavior:

By default, event listeners and callbacks with these, are triggered during the bubbling phase (moving from the target element back up to the root).
Capturing is optional and can be enabled by setting the capture option to true when adding an event listener:
Capturing phase (root to target): The event "captures" down from the root (window or document) to the target element. By default, listeners on this path don’t trigger, unless { capture: true } is set.

The event flows down the DOM tree in the capturing phase without triggering any handlers unless { capture: true } is specified.
Then, it triggers handlers on the target.
Finally, it bubbles back up the DOM tree in the bubbling phase, where most handlers are triggered by default.

HTML Structure:
<!DOCTYPE html>
<html>
<head>
    <title>Event Bubbling and Capturing</title>
</head>
<body>
    <div id="outer" style="padding: 50px; background-color: lightblue;">
        Outer Div
        <div id="middle" style="padding: 50px; background-color: lightgreen;">
            Middle Div
            <div id="inner" style="padding: 50px; background-color: lightcoral;">
                Inner Div
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
*/

// Event handler function to show the event phase
function eventHandler(event) {
    console.log(`${event.currentTarget.id} - ${event.type} - ${event.eventPhase === 1 ? 'capturing' : 'bubbling'}`);
}

// Adding event listeners to each div for both capturing and bubbling phases
// Setting the third argument to true for capturing phase, false for bubbling phase

// Outer div event listeners
document.getElementById('outer').addEventListener('click', eventHandler, true);  // capturing
document.getElementById('outer').addEventListener('click', eventHandler, false); // bubbling

// Middle div event listeners
document.getElementById('middle').addEventListener('click', eventHandler, true);  // capturing
document.getElementById('middle').addEventListener('click', eventHandler, false); // bubbling

// Inner div event listeners
document.getElementById('inner').addEventListener('click', eventHandler, true);  // capturing
document.getElementById('inner').addEventListener('click', eventHandler, false); // bubbling


/* Why Use Event Bubbling?
Event bubbling is especially useful for "event delegation." This technique allows a single event listener on a parent element to handle events on multiple child elements. 
For example, if you have multiple buttons inside a container div, you can add one click listener to the container. 
When any button is clicked, the click event bubbles up to the container, which can then handle the event based on the clicked target.

Example Code for Event Delegation:
*/

document.getElementById("buttonContainer").addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        console.log("Button clicked", event.target.textContent);
    }
});
