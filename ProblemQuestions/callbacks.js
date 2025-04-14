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


























