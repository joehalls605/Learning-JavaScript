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

// practice
function doSomethingLater(callback){
    console.log("Wait for it");
    setTimeout(callback, 2000);
}
doSomethingLater(() => {
    console.log("2 seconds later!");
})

function doMath(x, y, operation){
    return operation(x, y);
}
const add = (a,b) => a + b;
const multiply = (a,b) => a * b;

console.log(doMath(3, 8, add));
console.log(doMath(3, 21, multiply));

const fruits = ["apple", "banana", "cherry"];
fruits.forEach(function(fruit, index){
    console.log(index + ":" + fruit);
})

function customFilter(arr, callback){
    const result = [];
    for(let item of arr){
        if(callback(item)){
            result.push(item);
        }
    }
    return result;
}
const numbers = [1,2,3,4,5];
const evens = customFilter(numbers, num => num % 2 === 0);

