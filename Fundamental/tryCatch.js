/*
Try and Catch.

try Statement:
The try statement allows you to define a block of code to be tested for errors while it is being executed.
If an error occurs within the try block, the execution is immediately stopped, and control is passed to the catch block.

catch Statement:
The catch statement allows you to define a block of code to be executed if an error occurs within the corresponding try block.
It catches any error that occurs in the try block and allows you to handle the error gracefully without crashing your program.
You can specify the type of error to catch by providing an error object (e.g., catch(error)), but it's also possible to catch any error without specifying the type.
*/

try {
    // Code that might throw an error
} catch (error) {
    // Code to handle the error
}

try {
    let result = 10 / 0; // This will cause a division by zero error
    console.log(result); // This line will not be executed
} catch (error) {
    console.log("An error occurred:", error.message); // Output: An error occurred: division by zero
}

