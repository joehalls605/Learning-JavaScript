// ARROW FUNCTION


/*Arrow functions have a concise syntax, especially when the function body contains a single expression. 
This can make the code more readable and reduces the need for boilerplate code. */

// Regular function

const regularFunction = function() {
    return 42;
};

//

// Arrow function
const arrowFunction = () => 42;



//Lexical scoping

/* Arrow functions capture the 'this' value of the surrounding context. In regular functions, the value
of this 'this' is dynamic and depends on how the function is called.
Arrow functions help avoid the 'this' keyword in certain scenarios
*/

function RegularFunction(){
    this.value = 42;

    // Regular function
    setTimeout(
        function(){
        console.log(this.value); // undefined (loses context)
    }, 1000);

    // Arrow function
    setTimeout(()=> {
        console.log(this.value); // 42 (lexical scoping)
    }, 1000)
}

const instance = new RegularFunction();

/*
Implicit return

If an arrow function consists of a signle statement, the result of the statement is implicitly returned.
No return statement is needed
*/

// Regular function
const regularAdd = function(x, y) {
    return x + y;
};

// Arrow function with implicit return
const arrowAdd = (x, y) => x + y;