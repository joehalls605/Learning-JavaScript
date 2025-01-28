// .bind()

/*
In JavaScript, the .bind() method creates a new function with a specific 'this' value and optional preset arguments.
This is useful for controlling the context (the value of 'this') in which a function is invoked.
*/

// 1. The Teacher (Alex) Object
const alex = {
    name: 'Alex',
    teach: function() {
        console.log(this.name + ' is teaching!');
    }
};

// Calling teach directly works fine because 'this' refers to 'alex'
alex.teach(); // Output: Alex is teaching!

// 2. But if we pass the teach method around to a variable:
const teachFunction = alex.teach;

// Now calling teachFunction will result in 'this' being undefined
teachFunction(); // Output: undefined is teaching!

// Why does this happen? Because 'this' inside teachFunction now refers to the global object, not Alex.

///////////////////////////////////////////////

// 3. To fix this, we can use .bind() to ensure 'this' always refers to 'alex'
const boundTeachFunction = alex.teach.bind(alex);

// Now calling the new function will always refer to Alex, no matter where it's called
boundTeachFunction(); // Output: Alex is teaching!


const joe = {
    name: "joe",
    coding: function(){
        console.log(this.name + "is coding");
    }
}

joe.coding(); // Output: joe is coding

const codingFunction = joe.coding;
codingFunction(); // Output undefined!

// To fix this

const boundCodingFunction = joe.coding.bind(joe); // binding coding function to joe object so they are always connected
boundCodingFunction();


