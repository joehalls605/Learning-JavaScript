// 1.
let name= "Joe";
const year = 1997;
console.log(name, year);

// 2.
function convertToNumber(string){
    return Number(string);
}
convertToNumber("25");

let number = 18 + "1";

// 3.
function upperCase(string){
    return string.toUpperCase();
}
upperCase("joe");

// 4.
const car = {
    make: "BMW",
    model: "X5",
    year: 2005
}
console.log(car.model);

const key = "model";
console.log(car[key]);

// 5.
function isAdult(age){
    if(age >= 18) {
        return "Adult"
    }else{
        return "Minor"
    }
}
isAdult(29);
isAdult(17);

// 6.
function nameOfDay(number){
    switch(number){
        case 1:
            return number = "Monday"
        case 2:
            return number = "Tuesday"
        case 3:
            return number = "Wednesday"
    }
}
nameOfDay(3);

// 7.
let number = 3
const isEven = number % 2 === 0 ? "Even" : "Odd";

// 8.
for(let i = 1; i <= 10; i++){
    if(i === 7) break;
    console.log(i)
}

// 9.
const colours = ["blue", "yellow", "red"];
for(const colour in colours){
    console.log(colours[colour]);
}
for(const colour of colours){
    console.log(colour);
}

// 10.
try{
    func();
}catch(error){
    console.log(error);
    console.log("Function doesn't exist!");
}

// 11.
const greet = (name = "Guest") => {
    return `Hello ${name}`;
}
greet();

// 12.
function restTest(...args){
    return args.reduce((acc, cur) => cur += acc);
}
restTest(24,6,3,2,1,5);

// 13.
const nums = [1,2,3,4,5];
const doubled = nums.map(function(number){
    return number * 2;
})
const filtered = doubled.filter(num => num > 5);

// 14.
const values = [10, 20, 30, 40];
const total = values.reduce((acc, curr) => {
    return acc += curr
});

// 15.
const nums = [50, 5, 100, 20];
const sorted = nums.sort((a,b) => a - b);

// 16.
const object = {
    name: "Peter",
    speak(){
        console.log(this.name);
    }
}
const bindedFunction = object.speak.bind(object);
setTimeout(bindedFunction, 1000);


// 17.
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Success!");
    }, 1000)
});

// 18.
function createCounter(){
    let count = 0;
    function innerFunction(){
        return count++;
    }
    return innerFunction;
}
const counter = createCounter();
counter();


// Task:

const cartItems = [
    {name: "pickles", price: 1.99, quantity: 4},
    {name: "tofu", price: 2.99, quantity: 1},
    {name: "jam", price: 1, quantity: 1},
]

function shoppingCartCalculator(cartItems){
    // sum total of products
    let itemTotal = 0;
    cartItems.forEach(item => itemTotal += item.quantity);

    // total cost of all items
    let priceTotal = 0;
    let total = cartItems.forEach(function(item){
        priceTotal += item.price * item.quantity;
    })
    // find the item with the highest price
    let sortedItemsDescending = cartItems.sort((a,b) => b.price - a.price);
    let mostExpensive = sortedItemsDescending[0].name;

    return {
        items: itemTotal,
        total,
        mostExpensive
    }
}
shoppingCartCalculator(cartItems);


// Rendering data

// 1.
const fruits = ["apple", "banana", "cherry"];
for(const fruit of fruits){
    console.log(fruit);
}

// 2.
const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];
for(const person of people){
    console.log(`Name:${person.name}, Age:${person.age}`);
}

// 3.
const classroom = {
    teacher: "Mrs. Smith",
    students: ["Tom", "Jerry", "Lisa"]
};
function printClassroom(classroom){
    console.log(`Teacher: ${classroom.teacher}`);
    console.log("Students:");
    for(const student of classroom.students){
        console.log(`- ${student}`);
    }
}
printClassroom(classroom);











