// condition ? valueIfTrue : valueIfFalse

function isAdult(age){
    return age >= 18 ? "You are an adult" : "You are a minor";
}
console.log(isAdult(19));

function checkEvenOdd(number){
    return number % 2 === 0 ? "The number is even" : "The number is odd";
}
checkEvenOdd(4);


function checkEvenOdd(number){
    return number % 2 === 0 ? "The number is even" : "The number is odd";
}
checkEvenOdd(8);

function ageGroup(age){
    return age >= 18 ? "You are an adult" : "You are a child";
}
ageGroup(28);