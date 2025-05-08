/*
The this keyword in JavaScript can be a bit confusing because its value depends on the context in which it is used.

this refers to the object that is currently executing the code where this is used.
It helps to access properties and methods of the object in that context.

method -> obj
function -> global (window, global)
*/


/*
When used inside a regular function, this refers to the global object (in browsers, it's window). However, in strict mode, this is undefined.
*/
function showThis() {
    console.log(this);
  }
  
  showThis(); // In a browser, this will log the `window` object or `undefined` in strict mode.
  
/*
When used inside a method of an object, this refers to the object itself.
*/

const person = {
    name: 'Alice',
    greet: function() {
      console.log(this.name);
    }
  };
  
  person.greet(); // Output: Alice
  

/*
When used in a constructor function, this refers to the newly created instance of the object.
*/

function Person(name) {
    this.name = name;
  }
  
  const alice = new Person('Alice');
  console.log(alice.name); // Output: Alice
  
/*
Arrow functions do not have their own this context. They inherit this from the surrounding scope (lexical scoping).

Here, this inside the arrow function refers to the person object because arrow functions do not have their own this.
*/


/*
In event handlers, this refers to the element that triggered the event.
*/

document.getElementById('myButton').addEventListener('click', function() {
    console.log(this); // Logs the button element
  });
  