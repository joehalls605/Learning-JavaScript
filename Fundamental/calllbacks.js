// CALLBACKS

/* Callbacks in JavaScript are functions that are passed as arguments to other functions 
and are executed after the completion of an asynchronous operation or at a specified time. 
Callbacks are commonly used in scenarios like event handling, AJAX requests, and setTimeout. 

You ask it to do some work then give it a mechanism to call you back when you're done. So I'm not waiting for it to be done.
*/


// Function with a callback parameter
function greet(name, callback) {
    // Print a greeting message with the provided name
    console.log(`Hello, ${name}!`);
    
    // Call the provided callback function
    callback(); // This line executes the callback function
}

// Callback function
function sayGoodbye() {
    // Print a goodbye message
    console.log("Goodbye!");
}

// Using the greet function with a callback
greet("John", sayGoodbye);

// other callback examples (synchronous)

setTimeout(() =>{
    console.log("hello")
}, 100)


const names = ['joe', 'jack', 'john']
names.forEach((name => console.log(name)))


const myForEach = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        cb(element);
    }
};

myForEach(names, (name) => {

})

// (asynchronous) doesn't work just a quick example

const loadPokemon = (id, cb) => {
    fetch(' https://pokeapi.co/api/v2/berry/').then(res => (res.json())).then(data => {
        cb(data)
    })
}

loadPokemon(56, (pokemon) => {
    console.log();
}
)
