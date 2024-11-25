// ERROR HANDLING

// Basic try and catch

try {
    // Code that may throw an error
    let result = 10 / 0; // This will throw a division by zero error
    console.log(result); // This line won't be executed
} catch (error) {
    // Catch and handle the error
    console.error('An error occurred:', error.message);
} finally {
    // Code in the finally block runs regardless of whether an error occurred or not
    console.log('This will always be executed.');
}


// Specific error handling

try {
    // Code that may throw an error
    let userInput = prompt('Enter a number:');
    if (isNaN(userInput)) {
        throw new Error('Not a valid number');
    }
    console.log('You entered:', Number(userInput));
} catch (error) {
    // Catch and handle specific error types
    if (error instanceof TypeError) {
        console.error('Type error:', error.message);
    } else if (error instanceof Error) {
        console.error('General error:', error.message);
    }
}
