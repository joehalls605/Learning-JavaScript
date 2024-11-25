/*
In object-oriented programming (OOP), instance methods and static methods are two types of methods that serve different purposes and have distinct characteristics. Here’s an explanation of each:

Instance Methods:
Definition: Instance methods are methods that operate on an instance of a class. They are associated with objects created from the class and can access and modify instance variables.

Accessing Instance Methods: Instance methods are called on instances of the class. Inside the method definition, this keyword refers to the current instance of the class.

Purpose: Instance methods typically perform operations that are specific to each instance of the class. They can access and modify instance variables (object properties) and are used to implement the behavior of objects.
*/

class Car {
    constructor(brand) {
        this.brand = brand;
    }

    // Instance method
    displayInfo() {
        console.log(`Brand: ${this.brand}`);
    }
}

// Creating an instance of Car
let myCar = new Car('Toyota');

// Calling instance method
myCar.displayInfo();  // Output: Brand: Toyota

/*
tatic Methods:
Definition: Static methods belong to the class itself and not to any instance. They are called on the class directly rather than on an instance of the class. They cannot access instance-specific data (this context), but they can access static data and other static methods.

Accessing Static Methods: Static methods are called on the class itself, not on instances. Inside a static method, this does not refer to an instance but to the class constructor.

Purpose: Static methods are used to define utility functions or operations that are not tied to any particular instance of the class. They can be used for tasks that involve the class as a whole, such as factory methods, helper functions, or computations based on class-level data.
*/

class MathUtils {
    static add(x, y) {
        return x + y;
    }

    static multiply(x, y) {
        return x * y;
    }
}

// Calling static methods
console.log(MathUtils.add(5, 3));        // Output: 8
console.log(MathUtils.multiply(4, 2));   // Output: 8

/*
Key Differences:
Access: Instance methods are called on instances of a class (object.method()), while static methods are called on the class itself (Class.method()).

Context: Instance methods can access and modify instance variables (this context), whereas static methods cannot directly access instance-specific data but can access class-level data and other static methods.

Purpose: Instance methods are used for behavior that is specific to each instance of a class, whereas static methods are used for behavior that is independent of any specific instance and relates to the class as a whole.

*/


/*
Scenario task

Suppose we want to create a Counter class that can count instances of itself and also provide a utility function to add numbers without needing an instance.
*/

class Counter {
    constructor() {
        // Initialize count for instances
        if (!Counter.instanceCount) {
            Counter.instanceCount = 0;
        }
        Counter.instanceCount++;
        
        // Initialize instance-specific count
        this.instanceNumber = Counter.instanceCount;
    }

    // Instance method: Get instance number
    getInstanceNumber() {
        return this.instanceNumber;
    }

    // Static method: Add two numbers
    static addNumbers(x, y) {
        return x + y;
    }
}
