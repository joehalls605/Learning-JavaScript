/*
Event Phases
When an event happens in the DOM, it goes through three phases:

1. Capturing Phase: The event travels from the root (the window) down to the target element.

2. Target Phase: The event reaches the target element.

3. 0Bubbling Phase: The event bubbles up from the target element back to the root.
Event Bubbling

Definition: In event bubbling, the event starts from the target element and bubbles up to the top (the window).
Default Behavior: By default, most event listeners are set to listen during the bubbling phase.

Usage: Used when you want to handle events after they have happened on the target element and its children.


Event Capturing

Definition: In event capturing, the event starts from the top (the window) and goes down to the target element.

Usage: Used when you want to handle events as they are trickling down to the target element.

HTML:
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



// Event handler function
function eventHandler(event) {
    console.log(`${event.currentTarget.id} - ${event.type} - ${event.eventPhase === 1 ? 'capturing' : 'bubbling'}`);
}

// Adding event listeners to each div
document.getElementById('outer').addEventListener('click', eventHandler, true);  // capturing phase
document.getElementById('outer').addEventListener('click', eventHandler, false); // bubbling phase

document.getElementById('middle').addEventListener('click', eventHandler, true);  // capturing phase
document.getElementById('middle').addEventListener('click', eventHandler, false); // bubbling phase

document.getElementById('inner').addEventListener('click', eventHandler, true);  // capturing phase
document.getElementById('inner').addEventListener('click', eventHandler, false); // bubbling phase

