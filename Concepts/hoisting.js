/*
Hoisting in JavaScript is a behavior where variable and function declarations are moved ("hoisted") - 
to the top of their containing scope during the compile phase, before the code is executed. 
This means that regardless of where variables and functions are declared within a scope, 
they are treated as if they are declared at the top of the scope.

Variable Hoisting:
In the case of variables declared with var, JavaScript hoists the declaration (but not the initialization) - 
to the top of the function or global scope. For example:
*/

console.log(myVar); // undefined
var myVar = 10;
console.log(myVar); // 10


// During execution, the above code is interpreted as:

var myVar; // Declaration is hoisted
console.log(myVar); // undefined
myVar = 10; // Initialisation remains here
console.log(myVar); // 10

/* This is why console.log(myVar) does not throw an error but instead logs undefined before myVar is initialized with 10. */

/* Function Hoisting
Function declarations are also hoisted in JavaScript. This means that both named and anonymous function declarations are moved to the top of their scope. For example:
*/

sayHello(); // "Hello!"

function sayHello() {
  console.log("Hello!");
}

/*
Hoisting with let and const:

Variables declared with let and const are also hoisted, but they are not initialized until their actual line of code is executed. 
This means that using them before their declaration (in the code) results in a ReferenceError.
*/

/*
Hoisting Considerations:
Declaration vs Initialization: Hoisting moves only the declaration of variables and functions, 
not the initialization (assignment of values). 
Therefore, if you access a variable before it's initialised, it will be undefined.

Function Declarations vs Function Expressions: 

Function declarations are fully hoisted (both name and body), while function expressions (where functions are assigned to variables) -
are hoisted only in part (the variable is hoisted, but not the function assignment).

Best Practices: To avoid confusion and potential bugs, it's recommended to declare variables at the beginning of their scope - 
and to declare functions before using them, even though JavaScript allows for hoisting.
*/