const generateGreeting = (name) => {
    return `Hello ${name}`;
}
generateGreeting("Joe");

const checkAgeCategory = (age) => {
    if(age <= 12){
        return "You are a child";
    }
    else if(age >= 13 && age <= 17){
        return "You are a teenager";
    }
    else{
        return "You are an adult";
    }
}
checkAgeCategory(10);

// Converting functions to arrow functions
const sayHello = (name) => "Hello" + name + "!";

const square = (num) => num * num;

const isEven = (n) => n % 2 === 0;

const add = (a,b) => a + b;

const getPositiveNumbers = (arr) => arr.filter( num => num > 0);

