/*
Encapsulation in JavaScript is a fundamental concept of object-oriented programming that involves -
bundling the data (properties) and methods (functions) that operate on the data into a single unit, usually an object. 
Encapsulation also helps to restrict direct access to some of an object's components, 
which is a way to protect the internal state of the object and to hide the implementation details.

Key Concepts of Encapsulation
Data Hiding: Only expose necessary parts of an object, while keeping the rest hidden from the outside world.
Methods for Interaction: Provide methods to access and modify the data, often with validation or additional logic.


In this example, count is a private variable that can only be accessed and modified through - 
the methods increment, decrement, and getCount.
*/

function createCounter() {
    let count = 0; // Private variable

    return {
        increment: function() {
            count += 1;
            return count;
        },
        decrement: function() {
            count -= 1;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
console.log(counter.decrement()); // 1
console.log(counter.count);       // undefined (cannot access private variable directly)
