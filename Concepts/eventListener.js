// Event listener

/* An event listener is a function that waits for an event to occur and then executes some code in response to that event.
Events can be triggered by user interactions such as clicks, mouse movements and keyboard actions.

Breakdown of how event listeners work.

1. Event registration
First you register an event listener to a specific element in the HTML document or to the global document object itself.
You can do this using the addEventListener method.
2. Event type
This specifies the type of event to listen for.
Common events include click, mouseover, submit.
3. Callback function.
Provide a callback function (often called the event handler) that will be executed when the specified event occurs.
4. Event triggering
When the specified event occurs, the browser triggers the event and the associated callback function is called
*/

// HTML: <button id="myButton">Click Me</button>

var button = document.getElementById("myButton");
button.addEventListener("click", function(){
    alert("button clicked!");
})