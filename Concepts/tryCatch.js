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


function divideNumbers(a, b){
    try{
        if(b === 0){
            throw new Error("Cannot divide by zero");
        }
        let result = a / b;
        console.log("The result is: " + result);
    }catch(error){
        console.log("Error" + error.message);
    }
}

divideNumbers(10, 0);
divideNumbers(10, 2);

/*
When Try catches are used:


In professional software projects, try...catch is used selectively to handle errors where they’re most likely and critical. Wrapping everything in try...catch is discouraged since it clutters code and can hide real issues. Here’s when try...catch is commonly used:

Unpredictable Inputs: For handling things like network requests, file operations, or user input that could fail due to issues outside the program’s control.

Application Boundaries: At key entry points (like server requests or controllers) to catch and log errors centrally without crashing the app.

Risky Code: Around inherently unstable code, like parsing JSON or using third-party libraries.

Critical Processes: When processing important tasks (e.g., saving data or payments), ensuring errors can trigger a safe fallback or recovery action.

Asynchronous Code: With async/await to catch errors in asynchronous workflows.

User Experience: To show friendly error messages or retries, improving the user experience when something goes wrong.

In practice, teams use try...catch strategically at key points and rely on centralized logging, avoiding overuse to keep the code clean and maintainable.

*/