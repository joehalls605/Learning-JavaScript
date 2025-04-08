/*
Use for loop when I need to use the index, loop a certain amount of times,
 */

const array = [1,2,3,4,57,6,4];

for(let i = 0; i < 10; i++){
    console.log(array[i]);
}

for(let i = 20; i <= array.length; i--){
    console.log(array[i]);
}

for(let i = 0; i < 5; i++){
    console.log("Hello");
}

for(let i = 1; i <= 10; i++){
    console.log(i);
}

const fruits = ["apple", "pear", "cherry"];
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

const numbers = [10,20,30];
for(let i = numbers.length - 1; i >= 0; i--){
    console.log(numbers[i]);
}
// since counting in code starts at 0, we have to do length - 1;
