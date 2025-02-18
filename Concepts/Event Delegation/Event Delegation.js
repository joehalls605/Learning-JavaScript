/*
Instead of adding an event listener to multiple elements individually, we add a single event listener to a parent element and let events "bubble up" from child elements.
Why? - It saves memory and works even if elements are added dynamically.

How It Works (Simply):

1. Add an event listener to a parent element.
2. When an event happens, check which child element triggered it (event.target).
3. Perform the necessary action based on that target.
 */



