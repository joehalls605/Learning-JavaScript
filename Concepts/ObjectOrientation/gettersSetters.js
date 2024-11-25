/*
Encapsulation, in the context of object-oriented programming (OOP), refers to the bundling of data (attributes) and methods (functions) that operate on the data into a single unit, called a class. It allows you to control access to certain components of an object and ensures that the internal state of an object is consistent and secure.

Encapsulation with Getters and Setters:
In JavaScript, encapsulation is often implemented using getters and setters. 

Getters:

Getters are methods that are used to retrieve (get) the value of an object's private property.
They provide controlled access to read the value of an attribute.
Getters are defined using the get keyword followed by the method name.
*/

class Person {
    constructor(name) {
        this._name = name; // Private property conventionally prefixed with _
    }

    get name() {
        return this._name; // Getter method for accessing _name
    }
}

const person = new Person('Alice');
console.log(person.name); // Output: "Alice"

/*
Setters:

Setters are methods used to modify (set) the value of an object's private property.
They provide controlled access to modify the value of an attribute.
Setters are defined using the set keyword followed by the method name.
*/

class Person {
    constructor(name) {
        this._name = name; // Private property conventionally prefixed with _
    }

    get name() {
        return this._name; // Getter method for accessing _name
    }

    set name(newName) {
        this._name = newName; // Setter method for modifying _name
    }
}

const person2 = new Person('Alice');
console.log(person.name); // Output: "Alice"

person.name = 'Bob'; // Using the setter to change the name
console.log(person.name); // Output: "Bob"

/*
Benefits of Encapsulation (Getters and Setters):
Data Protection: Getters and setters allow you to control access to object properties. You can enforce validation rules or perform operations (like logging or updating related properties) when getting or setting values.

Flexibility: You can change the internal implementation of a class (e.g., how a property is stored or calculated) without affecting external code that uses the class.

Security: Encapsulation helps protect the internal state of an object from unintended direct manipulation, reducing potential bugs and making the code more robust.


*/