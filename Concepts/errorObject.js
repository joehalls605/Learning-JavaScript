/* Error object is a special object used to represent errors that occur during execution */

const error = new Error("Something went wrong!");
console.log(error.name); // Error
console.log(error.message);



function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed!");
    }
    return a / b;
}

try {
    console.log(divide(10, 0)); // 🚨 Error thrown
} catch (error) {
    console.error(`Error: ${error.message}`);
}
