
//PROMISE AND ASYNC

/*
A promise is an object representing the eventual completion or failure of a an asynchronous 
operation.

It has three states:
pending 
fulfilled
rejected.
*/

// Creating a simple promise

const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation.
    setTimeout(()=> {
        const success = true;

        if(success){
            resolve("operation sucessful!");
        }
        else{
            reject("operation failed")
        }
    }, 2000)
});

myPromise.then((result) =>{
    
    console.log(result) // Output: Operation successful!

}).catch((error) => {
    console.error(); // Output: Operation failed!
})