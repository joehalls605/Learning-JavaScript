/*
.This
In Javascript, this .refers to the current execution context.
 The value of this is determinted by how a function is called and it can behave differently depending on how the function is invoked.
*/

//Global context:

console.log(this === window);

//Function context:

function myFunction(){
    console.log(this);
}

myFunction();

// Object contenxt:

const obj = {
    name: "Joe",
    greet: function(){
        console.log(this.name);
    }
}

obj.greet();

function Person(name){
    this.name = name;
}

/*
Setting Properties:

Inside the constructor function, this.name = name; assigns the name parameter passed to the constructor to 
the name property of the newly created object (person1).
*/

const person1 = new Person();
console.log(person1.name);