/*
.bind() is used to create a new function, that when called has its this keyword to a specific value.

Changing this Context:
When you use bind, you are creating a new function with a fixed this value.
Meaning,no matter how or where the function is called. This will always refer to the value provided.

Creating a New Function:
bind doesn't directly call the function; instead, it creates a new function that, when called, will have the specified this value.

*/

const myObject = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  
  const unboundGetX = myObject.getX; // unboundGetX is a reference to myObject's getX method
  console.log(unboundGetX()); // Output: undefined (because 'this' is not bound)
  
  const boundGetX = myObject.getX.bind(myObject); // boundGetX is a new function with 'this' bound to myObject
  console.log(boundGetX()); // Output: 42 (because 'this' is now bound to myObject)