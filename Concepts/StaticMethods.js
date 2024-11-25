/*
A static method in JavaScript is a method that belongs to a class itself rather than to instances (objects) of that class. 
This means you can call a static method directly on the class itself, without needing to create an instance of the class first.

Key Points about Static Methods:
Belongs to the Class: Static methods are defined on the class itself using the static keyword.

Direct Class Access: They can be called directly on the class, without needing to instantiate an object of the class.

Cannot Access Instance Properties: Static methods cannot access instance-specific properties (this keyword points to the class itself, not to an instance).

Typically Utility Methods: They are often used for utility functions that are related to the class but do not require any instance-specific data.
*/

class MyClass {
    constructor() {
        // Constructor of MyClass
    }

    static myStaticMethod() {
        // Static method definition
        console.log("This is a static method.");
    }
}

// Calling the static method directly on the class
MyClass.myStaticMethod(); // Output: "This is a static method."


