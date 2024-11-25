/* 
A callback is a function that you give to another function to run later, after a task is finished.
Callbacks are especially helpful for tasks that take time, like loading data, making network requests, or waiting for user actions. They make sure that some code runs only when the task is complete.

Let's say we want to greet a user after getting their name. 
We'll create a function that gets the user's name and another function that displays a greeting. 
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


// Function to greet and then call another function
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback(); // Run the callback after the greeting
}

// Callback function to say goodbye
function sayGoodbye() {
    console.log("Goodbye!");
}

// Use greet, and pass sayGoodbye as the callback
greet("John", sayGoodbye);

function speakToJohn(){
    greet("John", sayGoodbye);
}

speakToJohn();


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
