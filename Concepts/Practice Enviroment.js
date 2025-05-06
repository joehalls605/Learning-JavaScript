// .Map

const carMakes = ["Tesla", "Toyota", "BMW"];

const twentyFive = carMakes.map(item => item + " 2025")

carMakes.map(item => {
    return item + "2025";
})

carMakes.map(function(item){
    return item + "2025";
})


const nums = [1,2,3,4,5];

numsPlusTwo = nums.map(num => num + 2);

// . bind()

const person = {
    "name": "Alice",
    greet: function(){
        console.log("Hello", + this.name);
    }
};

// Bind the method to always use `person` as `this`
const sayHello = person.greet.bind(person);

// Accumulator practice

const numbers = [1,2,3,4,5,6];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0)