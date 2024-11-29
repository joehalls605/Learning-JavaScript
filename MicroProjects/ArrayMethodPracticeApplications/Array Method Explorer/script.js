/* TO DO:
Description card stuff
*/ 

const sampleData = [
    { id: 1, name: "Alice", age: 25, isStudent: true },
    { id: 2, name: "Bob", age: 30, isStudent: false },
    { id: 3, name: "Charlie", age: 22, isStudent: true },
    { id: 4, name: "Diana", age: 28, isStudent: false },
    { id: 5, name: "Eve", age: 35, isStudent: false }
];



const buttons =  document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => selectArrayMethod(button));
})

function selectArrayMethod(button){
    if(button.textContent === "charAt"){
        charAtFunction(sampleData);
    }
    if(button.textContent === "filter"){
        filterFunction(sampleData);
    }
    if(button.textContent === "find"){
        findFunction(sampleData);
    }
    if(button.textContent === "includes"){
        includesFunction(sampleData);
    }
    if(button.textContent === "map"){
        mapFunction(sampleData);
    }
    if(button.textContent === "pop"){
        popFunction(sampleData);
    }
    if(button.textContent === "reduce"){
        reduceFunction(sampleData);
    }
    if(button.textContent === "reduceV2"){
        reduceFunctionV2(sampleData);
    }
    if(button.textContent === "reverse"){
        reverseFunction(sampleData);
    }
    if(button.textContent === "shift"){
        shiftFunction(sampleData);
    }
    if(button.textContent === "slice"){
        sliceFunction(sampleData);
    }
    if(button.textContent === "sort"){
        sortFunction(sampleData);
    }
    if(button.textContent === "unshift"){
        unshiftFunction(sampleData);
    }
    if(button.textContent === "some"){
        someFunction(sampleData);
    }
}


// ARRAY FUNCTIONS

// charAt()
function charAtFunction(sampleData){
    sampleData.forEach(element => {
    const character = element.name.charAt(0);
    console.log(`charAt: ${character}`);
    return character;
    });
}

// function charAtFunct(){
//     sampleData.forEach(element => {
//         const character = element.name.charAt(0);
//         return character;
//     })
// }

// filter()
function filterFunction(sampleData){
  const filteredByAge = sampleData.filter(person => person.age > 25);
  let output = "";
  filteredByAge.forEach(person => {
    output += person.name + "\n";
  });

  console.log(filteredByAge);
  render(output);
  return filteredByAge;
}

// function filterFunction(sampleData){
//     const filteredByAge = sampleData.filter(person => person.age > 25);
//     let output = "";
//     filteredByAge.forEach(person => {
//         output += person.name;
//     })

//     render(output);
//     return filteredByAge;
// }


// find()
function findFunction(){
    const nameToFind = "Eve";
    const foundName = sampleData.find(function(person){
        return person.name === nameToFind;
    });
    render(foundName.name);
}

// function findFunction(){
//     const nameToFind = "Eve";
//     const foundName = sampleData.find(person => person.name === nameToFind);
//     render(foundName.name);
// }

// includes()
function includesFunction(){
    const ages = sampleData.map(person => person.age);
    const includesOutput = ages.includes(30);
    render(includesOutput);
}

function includesFunction(){
    const ages = sampleData.map(person => person.age);

}

// map() - creates a new array by applying a provided function to each element of the original array, without modifying the original.
function mapFunction(){
    const objectsAgeIncrease = sampleData.map(function(person){
        return person.age + 1; 
    });
    render(objectsAgeIncrease);
}

// function mapFunction(){
//     const objectsAgeIncrease = sampleData.map(person => person.age + 1);
//     render(objectsAgeIncrease);
// }

function popFunction(){
    const removedPerson = sampleData.pop();
    const output = `Removed person: Name:${removedPerson.name}, Age: ${removedPerson.age}`;
    render(output);
}

// function popFunction(){
//     const removedPerson = sampleData.pop();
//     const output = `Removed person: Name${removedPerson.name}, Age: ${removedPerson.age}`;
//     render(output);
// }

// Reduce - processes an array by applying a callback function to accumulate a single output valued based on its elements starting with an initial value.
// (accumulator, currentValue) accumulator is an acculated result from previous iterations of the callback. currentValue represents the current element of the array being processed.

function reduceFunction(){
    const totaledAges = sampleData.reduce((total, currentValue) => total + currentValue.age, 0);
    console.log(totaledAges);
    render(totaledAges);
}

// function reduceFunctionV1(){
//     const totaledAges = sampleData.reduce((total, currentValue) => total + currentValue.age, 0);
// }

// function reduceFunctionV2(){
//     const totaledAgesMultiplied = sampleData.reduce((total, currentValue) => (total + currentValue.age) * 2, 0);
//     render(totaledAgesMultiplied);
// }

function reverseFunction(){
    
    // by using the spread operator, it creates a copy of the array.
    const reversedData = [...sampleData].reverse(); 

    // using .map() to create a new array with the name property from each object in the array
    const output = reversedData.map(person => person.name).join(",");

    render(output);
}

function reverseFunction(){
    // the spread operator creates a shallow copy of the array
    const reversedData = [...sampleData].reverse();

       // using .map() to create a new array with the name property from each object in the array
       const output = reversedData.map(person => person.name).join("");;

       render(output);
}

// shift removes the first element from an array and returns that element

function shiftFunction(){
    const removedFirstItem = sampleData.shift();
    const output = removedFirstItem.name;
    render(output);
}

// function shiftFunction(){
//     const removedFirstItem = sampleData.shift();
//     const output = removedFirstItem.name;
//     render(output);
// }

function sliceFunction(){
    // Slicing the first two elements of the aray
    const slicedFirstName = sampleData.slice(0,2);

    // Map the sliced data to extract the names
    const output = slicedFirstName.map((person) => person.name);
    render(output);
}

function sliceFunction(){
    
    // Slicing the first two elements of an array
    const slicedFirstName = sampleData.slice(0,2);

    // Map the sliced data to extract the names
    const output = slicedFirstName.map((person) => person.name);
    render(output);
}

function sortFunction(){
    // Sorting by age in ascending order
    // I'm using the callback function to compare pairs of elements a and b in the array.
    // If the result is negative (a < b), a will come before b, if the result is positive  (a > b), b will come before a
    const sortByAge = sampleData.sort((a,b) => a.age - b.age);

    // Extracting the names for display
    const output = sortByAge.map((person) => person.name).join(",");

    render(output);
}

// function sortFunction(){
//     // Sorting by age in ascending order
//     // I'm using the callback function to compare pairs of elements a and b in the array.
//     // If the result is negative (a < b), a will come before b, if the result is positive  (a > b), b will come before a
//     const sortByAge = sampleData.sort((a, b) => a.age - b.age);
//     const output = sortByAge.map((person) => person.name).join(",");
//     render(output);
// }

function unshiftFunction(){
    // Unshift is about adding items to beginning

    person = {
        id: 0, 
        name: "Phil", 
        age: 27, 
        isStudent: true
    }

    // Adding the new person to start of the ORIGINAL array
    sampleData.unshift(person);

    // Extract the names from the update array
    const output = sampleData.map(person => person.name).join(",");

    render(output);
}



// ARRAY RENDERING METHOD
function render(value){
    const outputElement = document.getElementById("output");
    outputElement.append(value);
}

/*
Learnings from this micro project

- If I want to create a new array, where each element is transformed in some way, I want to use .map
- If I need a specific property from every object, .map is great for generate a new array of those values
- .map is often used with .filter, .reduce, .sort to perform some complex operation. As shown below.
*/

const filteredNames = sampleData.filter(person => person.age > 25).map(person => person.name);

/*
When not to use .map:
- if you're just looping through the array to perform side effects (like logging or modifying a dom elenet) use foreach instead.
*/

sampleData.forEach(person => console.log(person.name));
