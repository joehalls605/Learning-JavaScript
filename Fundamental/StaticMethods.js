/*
In JavaScript, a static method is a method that is defined in the class itself, rather than an instance of the class.
Static methods are called on the class itself and not on an isntance of the class. They are often used for utlity frunctions that are related to the class
but do not operate on individual instances.

Characteristics of Static Methods
Defined on the Class: Static methods are defined on the class itself and are called directly on the class.

No Access to Instance Data: Static methods cannot access instance properties or instance methods using this. They can only access other static properties and static methods.

Utility Functions: Static methods are typically used for utility or helper functions that perform tasks related to the class but do not require data from an instance.
*/


//Example:

class MathUtil{

    // Static method
    static add(a,b){
        return a + b;
    }

    // Static method
    static multiply(a,b){
        return a*b;
    }
}

console.log(MathUtil.add(2,3));
console.log(MathUtil.multiply(6,3));

/*
Instance vs. Static Methods:
Instance methods are methods that are defined on the prototype of the class and are called on instances of the class (objects created with new).
Static methods, on the other hand, are defined directly on the class itself using the static keyword and are called on the class directly (ClassName.method()).
*/
