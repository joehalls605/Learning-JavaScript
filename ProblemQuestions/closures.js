function createCounter(){
    let count = 0;

    function countIncrease(){
        count++;
        console.log(count);
    }
    return countIncrease;
}

const counter = createCounter();
counter();
counter();
counter();

//

function createGreet(name){
    function printName(){
        return `Hello ${name}!`;
    }
    return printName;
}

const greetAlice = createGreet("Alice");
const greetBob = createGreet("Bob");

greetAlice();
greetBob();


// 1.
function counter(){
    let count = 0;

    function increaseCount(){
        count++;
        return count;
    }
    return increaseCount;
}

const increment = counter();
console.log(increment);


// 2.

function multiplyBy(num){
    function multiply(num){
        return num * 2;
    }
    return multiply;
}
const multiplyBy2 = multiplyBy(2);
console.log(multiplyBy2(5));

























