// Simple call back example.

function greet(name, callback){
    console.log("Hello" + name);
    callback();
}
function sayGoodbye(){
    console.log();
}
greet("Alice", sayGoodbye);


// Callback in Async example

function fetchData(callback){
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    },2000)
}
function processData(){
    console.log("processing the data");
}
fetchData(processData);
