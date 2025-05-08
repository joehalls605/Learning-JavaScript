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
