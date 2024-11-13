/*
Event Phases in Simple Terms
When an event (like a click) happens on a webpage, it doesn’t just stop at the element you clicked. 

It actually moves through three phases:

1. Event Capturing: 
   - The capturing phase, also called the "trickling" phase, is when the event starts at the top of the document (the window) and moves down the DOM tree through each element until it reaches the one you clicked on (the target).
   - For example, if you click on an `inner div` nested inside two other divs, the event travels from the `window` down through the `outer div`, then `middle div`, until it reaches the `inner div`.

2. Target Phase:
   - This is the point where the event has reached the target element—the one that was actually clicked. 
   The event will be processed here if there are any listeners attached to the target element.

3. Event Bubbling: 
   - In the bubbling phase, the event then moves back up the DOM tree from the target element toward the root (window), passing through each ancestor element it traveled down through.
   - For instance, after reaching the `inner div`, it will travel up through `middle div`, then `outer div`, and finally back to the `window`.

Default Event Phase Behavior
- By default, event listeners listen during the bubbling phase. This means that when an event is triggered, listeners attached to elements in the DOM will catch the event as it moves back up the DOM tree.
- However, you can specify which phase you want to listen on by adding a third argument to the event listener: 
  - `true` for capturing phase
  - `false` for bubbling phase (this is the default)

When to Use Each Phase
- Bubbling (default) is useful for handling events after they reach the target element, which is helpful for event delegation or handling multiple events at once.
- Capturing is useful if you want to intercept events before they reach the target element, like intercepting clicks before they trigger the target’s default behavior.

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
