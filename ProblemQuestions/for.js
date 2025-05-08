
// 1.
let numbers = [1,2,3,4,5];
for(let i = 1; i <= 5; i++){
    console.log(i);
}

// 2.
for(let i = 0; i <= 10; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}


// 3.
for(let i = 5; i >= 1; i--){
    console.log(i);
}

// 4.
const colors = ["red", "green", "blue"];
for(let i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

let sum = 0;
for(let i = 0; i <= 5; i++){
    sum += i;
}
console.log(sum);


// 1.
const nums = [3, 4, 7, 10, 12, 15];
let sum = 0;
for(let i = 0; i < nums.length; i++){
    if(nums[i] % 2 === 0){
        sum += nums[i]
    }
}
console.log(sum);

// 2.
const word = "coding";
for(let i = 0; i < word.length; i++){
    console.log(word[i]);
}

// 3.
const scores = [1, 2, 3, 2, 4, 2, 5];

let count = 0;
for(let i = 0; i < scores.length; i++){
    if(scores[i] === 2){
        count++;
    }
}
console.log(count);

//4.
const letters = ['a', 'b', 'c', 'd'];

for(let i = letters.length - 1; i >= 0; i--){
    console.log(letters[i]);
} // only use -1 when starting from the end of an array.
