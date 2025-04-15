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

