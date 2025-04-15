const numbers = [5, 10, 15];
const student = {
    name: "Alex",
    age: 20,
    grade: "A"
};
const greeting = "Hi!";

// 1.
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i] * 2);
}

// 2.
for(const key in student){
    console.log(key + ":" + student[key]);
}

// 3.
for(const character of greeting){
    console.log(character);
}

// 4.
const nums = [1, 2, 3, 4, 5];
let total = 0;
for(let i = 0; i < nums.length; i++){
    total += nums[i];
}
console.log(total);

// 5.
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

for(const key in car){
    console.log(key + "->" + car[key]);
}


// 6.
const message = "loop";

for(const char of message){
    console.log(char.toUpperCase());
}

// 7.
const numbers = [12, 5, 8, 130, 44];
let largestNumber = numbers[0]
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > largestNumber){
        largestNumber = numbers[i];
    }
}
console.log(largestNumber);

// 8.
const user = {
    name: "John",
    address: {
        street: "123 Main St",
        city: "Somewhere",
        zip: "12345"
    },
    hobbies: ["reading", "gaming", "coding"]
};

// 9.
for(const key in user){
   if(key === "address"){
       // Loop through address object
       for(const subKey in user[key]){
           console.log(subKey + ":" + user[key][subKey]);
       }
   } else if (key === "hobbies"){
       // Loop through the hobbies array
       console.log(key + ":");
       for(const hobby of user[key]){
           console.log(" " + hobby);
       }
   } else {
       // Print the name property
       console.log(key + ":" + user[key]);
   }
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const let = 0;
// 10.
for(const number of nums){
    if(number / 2 === 0){
        total += number;
    }
}
console.log(total);

//
function countVowels(string){
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for(let i = 0; i < string.length; i++){
        if(vowels.includes(string[i].toLowerCase())){
            count++;
        }
    }
    return count;
}
countVowels("boris");

//
function fizzBuzzLite(n){
    for(let i = 1; i < n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }
        else if(i % 3 === 0){
            console.log("Fizz");
        }
        else if(i % 5 === 0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}
fizzBuzzLite(10);

const numbers = [2,3,4,5,65,32]
function sumPositive(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number > 0){
            sum += number;
        }
    }
    return sum;
}
sumPositive(numbers);

// regular for version:
const numbers = [2,3,4,5,65,32]
function sumPositiveReg(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > 0){
            sum += numbers[i];
        }
    }
    return sum;
}
sumPositiveReg(numbers);