
// PROMISE AND ASYNC

/*
A promise is an object representing the eventual completion or failure of an asynchronous operation.
Promises are used to handle asynchronous operations and provide a more readable and manageable way to write asynchronous code.
They have three states:
- pending
- fulfilled
- rejected
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

const myPromiseTwo = new Promise((resolve, reject) =>{
    // Simulating an asynchronous operation.
    setTimeout(()=>{
        const sucess = true;

        if(sucess){
            resolve("operation sucessful")
        }else{
            reject("operation failed");
        }
    }, 2000)

    myPromiseTwo.then((result) =>{
        console.log(result)
    })
    .catch((error) =>{
        console.error(error);
    })


})