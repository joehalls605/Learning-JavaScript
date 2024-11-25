/*

Loops in JavaScript let you run the same block of code multiple times. Each type of loop is a little different in how it works and when you might use it.

Anatomy of a for loop:
*/
for(initialisation; condition; update){ // ICU
    // code to repeat
}

for(let i = 0; i < 6; i++){
    console.log(i);
}

count = 0;
while(count < 8){
    count++;
    console.log(count);
}

number = 8;
while(number % 2 === 0){
    number = number / 2;
}

do{
    count++;
} while(count < 10);

/*
Use a for loop when you know the exact number of times to repeat.
Use a while loop when the number of repeats isn’t known, and you only want to run it if a condition is true.
Use a do...while loop when you want the code to run at least once, regardless of the condition.
*/