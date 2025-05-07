// For in

// 1.
const person = { name: "Alice", age: 25, city: "New York" };

for(const key in person){
    console.log(`${key} : ${person[key]}`);
}

// 2.
const car = { brand: "Toyota", model: "Corolla", year: 2020 };
let propertiesCount = 0;

for(const key in car){
    propertiesCount++;
}

// 3.
const book = { title: "1984", author: "Orwell", genre: "Dystopian" };
for(const key in book){
    console.log(key.toUpperCase());
}

// For of

// 1.
const fruits = ["apple", "banana", "cherry"];

for(fruit of fruits){
    console.log(fruit);
}

// 2.
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for(number of numbers){
    sum += number;
}

// 3.
const word = "hello";

for(character of word){
    console.log(character);
}


