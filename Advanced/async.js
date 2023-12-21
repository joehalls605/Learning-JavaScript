// ASYNC

/*
The async/await syntax is a more readable way to work with promises. 
It allows you to write asynchronous code in a synchronous style.
*/

async function myAsyncFunction(){
    try{
        const result = await myPromise;
        console.log(result)
        
    } catch(error){
        console.error(error);
    }
}

myAsyncFunction();