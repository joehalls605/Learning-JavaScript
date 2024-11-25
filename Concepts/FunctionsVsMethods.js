/*
Functions and methods are both used to describe reusable blocks of code.
However they have different usage scenarios.


Functions are standalone blocks of code that perform a specific task or calculation.
They are declared outside of any object or class.
Functions can take input parameters (arguments) and return a value.
Functions can be called independently from any object.
Example:
*/
function add(a, b) {
    return a + b;
}

var result = add(3, 5); // result is 8


/*
Methods are functions that are associated with objects or classes.
They are defined within objects or classes and operate on the data associated with those objects.
Methods are called by specifying the object or class followed by a dot (.) and then the method name.
Methods can access and manipulate the data (properties) of the object they belong to.
Example:
*/

var person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
};

person.greet(); // Output: "Hello, my name is John and I am 30 years old."



