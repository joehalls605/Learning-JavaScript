/* A callback is a function that is passed as an argument to another function and is executed after some operation has been completed. Callbacks are a way to ensure that certain code runs only after a specific task has finished, 
which is especially useful in asynchronous operations like reading files, making network requests, or handling events.


Let's say we want to greet a user after getting their name. We'll create a function that gets the user's name and another function that displays a greeting. 
We'll use a callback to ensure the greeting function runs after we get the user's name.
*/

// Function to get the user's name
function getName(callback){
    const name = "Alice";
    callback(name);
}

// Function to greet the user
function greet(name) {
    console.log(`Hello, ${name}!`);
  }

getName(greet);

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
