/*
Event.target.value is used to get or set the value of an HTML element when an event occurs.

How it works:
event - this refers to the event object that is generated when a user interacts with a HTML element.
The event object contains useful information about the event, like which element was clicked, which key was pressed etc.

event.target - this refers to the element that triggered the event.

event.target.value - this gets the current value of HTML element that triggered the event.
*/

/*
HTML:

<input type="text" id="myInput">
*/

document.getElementById('myInput').addEventListener('input', function(event) {
    console.log(event.target.value);  // Logs the current value of the input field
  });