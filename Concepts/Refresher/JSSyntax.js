// Arrays
const numbers = [1,2,3,4,5];

numbers.push(5);

const doubled = numbers.map(num => num * 2);
const evens = numbers.map(num => num % 2 === 0);

const filtered = numbers.filter( num => num > 2);

// Functions

function add(a,b){
    return a + b;
}

const subtract = (a,b) => {
    return a - b;
}

const multiply = (a,b) => a * b;

function multiplyTwo(a,b) {
    return a * b * 2;
}

// Conditionals

const score = 75;

if(score > 90){
    console.log("Great");
}
else if(score >= 60){
    console.log("Pass");
}
else{
    console.log("Fail");
}

const fruits = ["apple", "banana", "orange"];

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// for each value of an array
for(const fruit of fruits){
    console.log(fruit.toUpperCase());
}

// for each index
for(const index in fruits){
    console.log(index);
    console.log(fruits[index]);
}

// destructuring
const user = {
    name: "Joe",
    age: 25,
    country: "UK"
};

const { name, age } = user;
console.log(name);
console.log(age);

// Spread operator

const original = [1,2,3];
const copy = [...original, 4,5,6];

const user = {name: "Joe"};
const updatedUser = { ...user, role: "Developer"};

console.log(copy);
console.log(updatedUser);


/* Promises and ASYNC
* JavaScript is non-blocking. JavaScript runs on one main thread. If it waited for slow things like network requests, the whole app would freeze
*  So JS does this instead: Start the slow task, keep running the other code. Come back later when the result is ready
* */

console.log("Start");

setTimeout(() => {
    console.log("This runs later");
}, 1000);

console.log("End");

/*
What is a promise?

A promise is just an object that represents a value that will exist in the future

A promise can be one of three states:
pending - still working
fulfilled - success
rejected - failed
* */

// Creates a promise object.
// The function you pass in is called the executor
// It runs immediately when the Promise is created (not later)
// The executor receives two functions:
// resolve - call this when the async task succeeds
// reject - call this when the async task fails

const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if(success){
        resolve("It worked");
    } else {
        reject("Something went wrong!");
    }
});


// Consuming the Promise with .then()
// .then() runs only if the Promise resolves
myPromise.then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});

// Rewriting the above with async / await

const myPromise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("It worked");
    } else {
        reject("Something went wrong!");
    }
});

async function runPromise(){
    try{
        // Pause here until myPromise settles
        const result = await myPromise;
        console.log(result);
    } catch (error){
        console.error(error);
    }
}

runPromise();


// Real world example

async function fetchUserProfile(userId){
    const response = await fetch(`/api/users/${userId}`);

    if(!response.ok){
        throw new Error("Failed to fetch user profile")
    }

    // response is the raw HTTP response from fetch(). Its body is text, even if it looks like JSON:
    // It parses the JSON string in the response body and returns a JavaScript object
    return response.json();
}

// Orchestrator function (this is the “professional” part)
async function loadUserProfile(userId) {
    try {
        const user = await fetchUserProfile(userId);

        // 1️⃣ Update UI
        updateUserUI(user);

        // 2️⃣ Dispatch state
        store.dispatch({
            type: "USER_LOADED",
            payload: user
        });

        // 3️⃣ Call another function
        trackAnalytics("profile_loaded", user.id);

        // 4️⃣ Send logs to logging service
        logInfo("User profile loaded", { userId: user.id });

    } catch (error) {
        showErrorMessage("Could not load profile");
        logError("Profile load failed", error);
    }
}

// Callbacks

function greet(name, callback){
    console.log("Hello" + name);
    callback();
}

function sayGoodbye(){
    console.log("Goodbye");
}

greet("Joe", sayGoodbye);


// let - can be reassigned
// const - cannot be reassigned
// js is dynamically typed which means variables do not have a fixed type.

// Ternary

const age = 20;
const canVote = age >= 18 ? "Yes can vote" : "No, too young";


// More fetch await practice

const fetchPost = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        console.log(data);
    } catch (error){
        console.error("Error fetching post", error);
    }
}

fetchPost();

/*
1. fetch returns a promise
2. await pauses untill that response is ready
3. .json also returns a promise so we await that too
4. try catch for handling any errors

Function	Returns Promise?	Notes
fetch(url)	✅ Yes	Always returns a Promise that resolves to a Response object
response.json()	✅ Yes	Also returns a Promise that resolves to parsed JSON
setTimeout(fn, ms)	❌ No	It just schedules a callback; does not return a Promise by default
console.log()	❌ No	Synchronous
async function foo() {}	✅ Yes	Every async function always returns a Promise, even if you return a normal value
 */














