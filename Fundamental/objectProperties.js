/* In JavaScript, objects are collections of properties, and a property is an assoicate between a name -
and a value. Objects can also have methods, which are functions that belong to an object.


Property Types:

Data properties.

These properties hold a value. They have have four attributes:
"value" - the value of the property
"writable" - if true, the value of the property can be changed
"enumerable" - if true, the property can be enumerated in a for loop
"configurable" if true, the property can be deleted or changed.

Accessor properties:
These properties do not hold a value directly but define a getter and setter function.
They have four attributes:

"get": A function that returns the value of the property.
"set": A function that sets the value of the property
"enumerable": if true, the property can be enumerated in a for loop.
"configurable" if true, the property can be deleted or changed.


Creating and acessing properties.
*/

const obj = {};
obj.name = "John";  // Creates a property 'name' with value 'John'


/*
Properties can also be defined using Object.defineProperty or Object.defineProperties:
*/

Object.defineProperty(obj, 'age', {
    value: 30,
    writable: true,
    enumerable: true,
    configurable: true
});

// Accessing properties can be done using dot notation or bracket notation:

console.log(obj.name);   // "John"
console.log(obj['name']); // "John"

//Properties can be removed using the delete operator
delete obj.name;


//Object Methods

//Methods are functions defined within an object. They can be defined in various ways:
const obj = {
    name: "John",
    greet: function() {
        console.log("Hello " + this.name);
    }
};

//With ES6, you can use shorthand syntax:

const obj = {
    name: "John",
    greet() {
        console.log("Hello " + this.name);
    }
};

//Object.assign(): Copies all enumerable own properties from one or more source objects to a target object.

const target = {};
const source = { a: 1, b: 2 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2 }

//Object.keys(): Returns an array of a given object's own enumerable property names.
const obj = { a: 1, b: 2 };
console.log(Object.keys(obj)); // ["a", "b"]
