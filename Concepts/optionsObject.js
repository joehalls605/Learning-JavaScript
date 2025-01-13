/* An options object is a JavaScript object used to pass multiple name arguments to a function, method or a constructor, 
instead of passing a long list of positional arguments (where the order matters), you can group them into a single object with named properties.
This makes the code easier to read, understand and maintain.
*/

const options = {
    left: 100,
    behavior: "smooth",
};

// Without an options object

function scrollElement(x, y, behavior){
    console.log(`Scrolling to (${x}, ${y}) with ${behavior}`);
}

scrollElement(100, 200, "smooth");

// With an options object

function scrollElement({ x = 0, y = 0, behavior = "auto"}){
    console.log(`Scrolling to (${x}, ${y} with ${behavior})`);
}

scrollElement({x:100, y:200, behavior:"smooth"});

// as you can see, the order doesn't matter because I assign them.


// REAL WORLD EXAMPLE

fetch("https://api.example.com/data"),{
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({key: "value"}),
};

// The second argument is an options object where I specify the properties like method, headers, and body.


// Scroll by
container.scrollBy({
    left: -scrollAmount,
    behavior:"smooth"
})

// Creating a timer

function startTimer({duration = 1000, onTick, onComplete}){
    console.log(`Timer started for ${duration}ms`);
}

startTimer({
    duration: 2000,
    onTick: () => console.log("Tick"),
    onComplete: () => console.log("Done!")
})