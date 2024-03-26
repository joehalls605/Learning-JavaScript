// .bind()

/*
In JavaScript, the .bind() method is used to create a new function that, when called, 
has its this keyword set to a specific value, along with the ability to pass in predefined arguments. 
This allows you to control the context in which a function is invoked.
*/


/* Example:
Imagine you have a dog object and you want to use the bark method seperately from the dog object.
If I tried to call dog.bark() it works fine because this refers to the 'dog' object inside the bark method.

*/
const dog = {
    name: 'Buddy',
    bark: function() {
      console.log(this.name + ' says woof!');
    }
  };

  // However if I try to assign the bark method to a variable and call it, ther is a problem.

const barkFunction = dog.bark;
barkFunction(); // Error: Cannot read property 'name' of undefined

/*
This happens because this inside the 'barkFunction' no longer refers to the dog obect but the global object
where name property doesn't exist.


To fix this I use bind(). It allows you to explicitly set what 'this' refers to when the function is called.
*/

const barkFunctionBind = dog.bark.bind(dog);
barkFunctionBind(); // Output: Buddy says woof!

/*
dog.bark: This accesses the bark method of the dog object.

.bind(dog): This is where the magic of binding happens. The .bind() method is called on the bark method. 
By passing dog as an argument to .bind(), you're essentially saying, 
"whenever this function is called, make sure this inside the function refers to dog."
*/



const module = {
    x: 42,
    getX: function(){
        return this.x;
    }
}

const unboundGetX = module.getX;
console.log(unboundGetX()); // This will throw an error, because 'this' is not defined

const boundGetX = module.getX.bind(module);
console.log(boundGetX);