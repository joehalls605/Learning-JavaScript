const person = {
    name: "Joe",
    greet: function(){
        return `Hello my name is ${this.name}`;
    }
};

const boundGreet = person.greet.bind(person);
console.log(boundGreet()); // Now, this runs the greet function and always refers to Joe.

/*
When a method is stored in a variable, it loses its original this context.
Use .bind(object) to permanently lock the function's this to that object.
This is especially useful in callbacks or event handlers.
 */

const user = {
    name: "Joe",
    greet: function(){
        return `Hi I'm ${this.name}`;
    }
};

//

const person = {
    firstName: "Alice",
    surname: "Johnson",
};
function greet(){
    console.log("Hello, " + this.firstName + "" + this.lastName);
}

const boundGreet = greet.bind(person);
boundGreet();

// 1.
const person = {
    name: "Liam",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

const greetLiam = person.greet.bind(person);

// 2.
function greet() {
    console.log("Hello, " + this.name);
}

const user = { name: "Sophie" };

const newGreet = greet.bind(user);


const person = {
    name: "Joe"
};

// 1.
function greet(){
    console.log(`Hello my names ${this.name}`);
}
const boundFunction = greet.bind(person);
boundFunction();

// 2.
//  Task: Use .bind() to create a new function called double that always multiplies by 2

function multiply(a,b){
    return a * b;
}
const double = multiply.bind(null, 2);
console.log(double(4));


const Rabbit = {
    name: "bambi"
};
function hop(){
    console.log(`I hop, I'm a rabbit! I'm ${this.name}!`);
}
/* .bind helps avoid losing the value of this inside a function
* .bind creates a new function,
* */
const boundHopFunction = hop.bind(Rabbit);
boundHopFunction(); // I hop, I'm Bambi!