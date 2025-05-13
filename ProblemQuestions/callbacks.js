//
function customForEach(array, callback){
    for(let i = 0; i < array.length; i++){
        callback(array[i], i, array);
    }
}
function logItem(item, index, array){
    console.log(`Item at index ${index} is ${item}`);
}
customForEach(["apple", "cherry", "tomato"], logItem);

//
function repeatAction(action, numTimes){
    for(let i = 0; i < numTimes; i++){
        action();
    }
}
function sayHello(){
    console.log("Hello!");
}
repeatAction(sayHello, 3);

//
function forEachNumber(numbers, callback){
    for(const number of numbers){
        callback(number);
    }
}
function printDouble(n){
    console.log(n * 2);
}
forEachNumber([1,2,3], printDouble)

//
const users = [
    { name: "Alice" },
    { name: "Bob" },
    { name: "Charlie" }
];

function processUsers(users, callback){
    for(const user of users){
        callback(user);
    }
}

function greetUser(user){
    console.log(`Welcome, ${user.name}!`);
}

processUsers(users, greetUser);


// 1.
function greet(name, callback){
    console.log("Hello" + name + "!");
    callback();
}
function sayBye(){
    console.log("Goodbye!");
}
greet("Joe", sayBye);

// 2.
function doMath(a,b, callback){
    return callback(a,b);
}
function add(x,y){
    return x + y
}
doMath(5,2,add);

// 3.
function processArray(arr, callback){
    for(let i = 0; i < arr.length; i++){
        callback(arr[i]);
    }
}
function log(arrayValue){
    console.log(arrayValue);
}
processArray([1,2,3],log);

//4.
function delayedMessage(message, delay, callback){
    setTimeout(() => {
        console.log(message);
        callback();
    }, delay)
}
function message(){
    console.log("Callback called!");
}
delayedMessage("Done!", 2000, message);

//5.
function checkAge(age, onSuccess, onFailure){
    if(age >= 18){
        onSuccess();
    }else{
        onFailure();
    }
}
function onSuccess(){
    console.log("Success!");
}
function onFailure(){
    console.log("Failure!");
}
checkAge(20, onSuccess, onFailure);

// 6.
function customFilter(arr, callback){
    const result = [];
    for(let item of arr){
        if(callback(item)){
            result.push(item);
        }
    }
    return result;
}

function evenNumber(number){
    if(number % 2 === 0){
        return true;
    }
}
customFilter([1,2,3,4,5,6], evenNumber);

// 7. ?
function stepOne(value, callback){
    console.log("Step 1:" + value);
    callback(value + 1);
}
function stepTwo(value, callback) {
    console.log("Step 2: " + value);
    callback(value + 1);
}
function stepThree(value) {
    console.log("Step 3: " + value);
}
stepOne(0, (result1) => {
    stepTwo(result1, (result2) => {
        stepThree(result2)
    })
})


// 8.
function customForEach(arr, callback){
    for(let i = 0; i < arr.length; i++){
        callback(arr[i], i);
    }
}
function log(arrayValue, index){
    console.log(`Index${index}, Value:${arrayValue}`);
}
customForEach([10,20,30], log);

// 9.
function runCallbacks(value, callbacks) {
    for (let cb of callbacks) {
        cb(value);
    }
}
function callbackOne(value){
    console.log("callback one! Value:", value);
}
function callbackTwo(value){
    console.log("callback one! Value:", value);
}
function callbackThree(value){
    console.log("callback one! Value:", value);
}

runCallbacks(5, [callbackOne, callbackTwo, callbackThree]);

// 10.
function simulateRequest(success, onSuccess, onError) {
    if (success) {
        onSuccess("Request succeeded!");
    } else {
        onError("Request failed.");
    }
}
simulateRequest(true, handleSuccess, handleError);
function handleSuccess(message) {
    console.log("SUCCESS:", message);
}

function handleError(error) {
    console.error("ERROR:", error);
}





