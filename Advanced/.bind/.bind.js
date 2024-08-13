/*
Purpose:
.bind() is used to set the value of this explicitly inside a function when the function is called.

Why Use .bind()?:
In JavaScript, the value of this. depends on how a function is invoked. 
Sometimes, you want to ensure that this inside a function always refers to a specific object, regardless of how or where the function is called.

How It Works:
When you call .bind() on a function and pass an object as an argument, it creates a new function. 
This new function, when called, will have this set to the object you passed to .bind().
The original function remains unchanged; .bind() creates a new function with a fixed this value.

*/

const person = {
  name: 'Alice',
  greet: function() {
    console.log('Hello, my name is ' + this.name);
  }
};

const friend = {
  name: 'Bob'
};

// Using .bind() to create a new function with 'this' bound to person
const greetPerson = person.greet.bind(person);
greetPerson(); // Output: Hello, my name is Alice

// Using .bind() to create a new function with 'this' bound to friend
const greetFriend = person.greet.bind(friend);
greetFriend(); // Output: Hello, my name is Bob

let c1 = {
  x: 5, 
  y: 10
}

let c2 = {
  x: 3, 
  y: 4
}

function printCoordinates(){
  console.log(this.x + "," + this.y); 
}

let c1_func = printCoordinates.bind(c1); // this creates a new function, that binds c1 to the new method.

c1_func();


/*
When you use bind in JavaScript, it's like giving the chef a magical toolbox that they carry with them to any kitchen they go to. This toolbox contains the specific tools you want the chef to use, no matter where they are.

Here's a breakdown:

Chef (Function): The function you want to run.
Kitchen (Context): The this value inside the function.
Tools (Arguments): The arguments the function uses.
By using bind, you're giving the chef a specific set of tools (the this value and any predefined arguments) that they will always use, no matter where they end up cooking (no matter where the function gets called).


*/

function chef(dish) {
  console.log(this.tool + " used to cook " + dish);
}

const magicalToolbox = { tool: "magic spatula" };

const boundChef = chef.bind(magicalToolbox);

boundChef("pasta"); // Output: magic spatula used to cook pasta
