// Spread

// 1.

const arrayOne = [1,2,3];
const arrayTwo = [4,5,6];

const newArray = [...arrayOne, ...arrayTwo];

// 2.
const objOne = { name: "John", age: "28" };
const objTwo = { city: "New York", occupation: "Developer" };
const newObj = {...objOne, ...objTwo};

// 3.
const js = "JavaScript";
const arrayOfCharacters = [...js];

// Rest

// 1.

function hello(...args){
    return args.reduce((acc, num) => acc + num, 0);
}

// 2.

function message(name, ...messages){
    console.log(name, ...messages);
}
message("Joe", "Hi Joe", "What you up to Joe");

// 3.

function x (name, ...information){
    console.log(name, ...information);
}

x("Joe", "Born in this date", "favourite colour is blue", "Hometown is");