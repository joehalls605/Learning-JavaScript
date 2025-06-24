// Waiting two seconds

function waitTwoSeconds(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Finished waiting!");
        }, 2000)
    });
}

async function run(){
    console.log("Start");

    // Pause here and wait for waitTwoSeconds to finish
    const result = await waitTwoSeconds();

    console.log(result);
    console.log("End");
}
run();


// Making breakfast
function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Meal steps
async function fryEggs(){
    console.log("Frying eggs...");
    await wait (2000);
    console.log("Eggs are ready!");
}
async function toastBread(){
    console.log("Toasting bread");
    await wait(1500);
}
async function pourCoffee(){
    console.log("Pouring coffee...");
    await wait(1000);
    console.log("Coffee is ready!");
}

// Master async function
async function makeBreakfast(){
    console.log("Start breakfast");
    await fryEggs();
    await toastBread();
    await pourCoffee();
}

makeBreakfast();



// car wash example
function washCar(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Car has been washed");
        }, 3000)
    })
}

async function cleanCar(){
    console.log("Starting to wash the car...");

    // Wait here until the car is done washing
    const result = await washCar();

    console.log(result);
    console.log("Car is clean! 🚗✨");
}
cleanCar();


// downloading a file
function downloadFile(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("File has been downloaded");
        }, 2000)
    })
}
async function waitFileDownload(){
    const result = await downloadFile();

    console.log(result);
    console.log("file downloaded!");
}
waitFileDownload();



