// 1. Loop through Numbers:
// TODO: Write a for loop that prints the numbers from 1 to 5.

const num = 1;

for(let i = 0; i < 5; i++){
 num++;
 console.log(num);
}

// 2. Loop through an Array:
// TODO: Use a for loop to iterate through the elements of the array `numbers` and log each element.

const numbers = [10, 20, 30, 40, 50];

for(let i = 0; i < numbers.length;){
    console.log(numbers[i]);
}

// 3. Modify Array Elements with a Loop:
// TODO: Use a for loop to double each element in the `numbers` array and log the modified array.

for(let i = 0; i < numbers.length;){
    numbers[i] = numbers[i] * 2;
    console.log(numbers);
}

// 4. Loop with Conditional Statement:
// TODO: Write a for loop that prints even numbers from 2 to 10.

for(let i = 2; i <= 10; i += 2){
    console.log(i)
}

// 5. Loop through Object Properties:
// TODO: Use a for...in loop to iterate through the properties of the object `person` and log each key-value pair.

const person = {
  name: "John",
  age: 25,
  occupation: "Engineer",
};

for(p in person){
    console.log(`${p}: ${person[p]}`);
}

// 6. Loop with Array and Conditional Statement:
// TODO: Use a for loop to iterate through the `numbers` array and log only the odd numbers.

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 !== 0){
        console.log(numbers[i]);
    }
}

// 7. Nested Loop with Arrays:
// TODO: Write nested loops to print a multiplication table for numbers 1 to 5 (up to 5x5).

for(let i = 1; i <=5; i++){
    for(let j = 1; j <= 5; j++){
        console.log(`${i} * ${j} = ${i * j} `);
    }
}

// 8. Loop through String Characters:
// TODO: Use a for loop to iterate through the characters of the string `word` and log each character.

const word = "loop";

for(let i = 0; i < word.length; i++){
    console.log(word[i]);
}

// 9. Loop with Break Statement:
// TODO: Write a for loop to find and log the first occurrence of the number 30 in the `numbers` array. Use the break statement to exit the loop once found.

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] === 30){
        break;
    }
}

// 10. Loop with Array and Conditional Statement:
// TODO: Use a for...of loop to iterate through the `colors` array and log only the colors that contain the letter "e".

const colors = ["red", "green", "blue", "yellow"];

for (const color of colors) {
    if (color.includes("e")) {
        console.log(color);
    }
}