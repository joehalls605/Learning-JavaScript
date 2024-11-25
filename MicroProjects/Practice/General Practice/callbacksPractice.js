// Basic callback

function greet(name, callback){
    console.log("Hello!" + name + "!");
    callback();
}

function sayGoodbye(){
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);


// Set time out usage

function fetchData(callback) {
    console.log('Fetching data...');
    setTimeout(() => {
        const data = { name: 'John', age: 30 };
        console.log('Data fetched!');
        callback(data);
    }, 2000); 
}

function processData(data) {
    console.log('Processing data...');
    console.log('Name:', data.name);
    console.log('Age:', data.age);
}

// Calling fetchData with processData as a callback
fetchData(processData);


// Error-First Callback Pattern

function readFile(callback){
    const error = null;
    const data = "File content goes here";

    setTimeout(()=>{
        if(error){
            callback(error, null);
        }
        else{
            callback(null, data);
        }
    }, 1000);
}

function handleFileRead(error, data){
    if(error){
        console.log("error occured");
    }
    else{
        console.log("file data", data);
    }
}

readFile(handleFileRead);