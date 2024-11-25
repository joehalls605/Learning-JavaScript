// variables are declared with keywords var, let, or const and can store different types of data.

/* 
Var declares a variable that can be reassigned and is function-scoped.
It allows redeclaration, which sometimes can lead to bugs
Variables with var, can be hoisted, which means they are moved to the top of the scope at runtime, but are initiliased to undefined.
*/

var name = "Alice";
name = "Bob";
var name = "Charlie";

/* 
let declares a block-scoped varaible, which is only accesible within the bloc {...} where it is defined.
It can be reassigned but not redeclared in the same scope.
*/

let age = 25;
age = 30;

/* 
const declares a block-scoped constant, meaning that the variable cannot be reassigned or redeclared.
The variable itself, is a constant, but if it holds an object or an array, the contents of that object or array can still change.
*/

const birthYear = 1995;
// birthYear = 2000; // Error: Cannot reassign `const` variable

// Quick template literal

const name = "Joe";
const intro = `Hello my name is ${name}`;


