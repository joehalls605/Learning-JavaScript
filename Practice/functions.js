// 1. Create a Function:
// TODO: Create a function named `multiply` that takes two parameters (num1 and num2) and returns their product.

function multiply(num1, num2){
return num1 * num2;
}


  
// 2. Function Invocation:
// TODO: Invoke the `multiply` function with arguments 4 and 5. Log the result.
const resultMultiply = multiply(4,5);
console.log(resultMultiply);

// 3. Pass Function as Parameter:
// TODO: Create a function named `applyOperation` that takes three parameters (num1, num2, and operation) and applies the specified operation to num1 and num2. 
// Invoke it with the `multiply` function as the operation. Log the result.

function applyOperation(num1, num2, operation){
    const output = operation(num1, num2);
    console.log(output);
  }

  applyOperation(3,7,multiply);

  // 4. Arrow Function:
  // TODO: Convert the `applyOperation` function to an arrow function called `applyOperationArrow`.
  
  const applyOperationArrow = (num1, num2, operation) => {
    return operation(num1, num2);
  };
  
  const resultArrow = applyOperationArrow(2, 6, multiply);
  console.log(resultArrow);



  // 5. Higher-Order Function:
  // TODO: Create a higher-order function named `modifyArray` that takes an array and a modification function. Apply the modification function to each element of the array and return the modified array. Use it to double each element in an array and log the result.
  
function modifyArray(arr, modificationFunction){
    return arr.map(modificationFunction);
}

const numbers = [1, 2, 3, 4];
const doubleArray = modifyArray(numbers, (num) => num * 2);
console.log(doubleArray);
