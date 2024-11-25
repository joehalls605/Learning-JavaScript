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


// find()
function findFunction(){
    const nameToFind = "Eve"
    const foundName = sampleData.find(function(person){
        return person.name === nameToFind;
    });
    render(foundName.name);
}

// includes()
function includesFunction(){
    const ages = sampleData.map(person => person.age);
    const includesOutput = ages.includes(30);
    render(includesOutput);
}

// map()
function mapFunction(){
    const objectsAgeIncrease = sampleData.map(function(person){
        return person.age + 1; 
    });
    render(objectsAgeIncrease);
}

function popFunction(){
    const removedPerson = sampleData.pop();
    const output = `Removed person: Name:${removedPerson.name}, Age: ${removedPerson.age}`;
    render(output);
}

function reduceFunction(){
    const totaledAges = sampleData.reduce((total, currentValue) => total + currentValue.age, 0);
    console.log(totaledAges);
    render(totaledAges);
}

function reduceFunctionV2(){
    const totaledAgesMultiplied = sampleData.reduce((total, currentValue) => (total + currentValue.age) * 2, 0);
    render(totaledAgesMultiplied);
}

function reverseFunction(){
    
    // by using the spread operator, it creates a copy of the array.
    const reversedData = [...sampleData].reverse(); 

    // using .map to extract the name property I want to display.
    const output = reversedData.map(person => person.name).join(",");

    render(output);
}

function shiftFunction(){
    const removedFirstItem = sampleData.shift();
    const output = removedFirstItem.name;
    render(output);
}

function sliceFunction(){
    // Slicing the first two elements of the aray
    const slicedFirstName = sampleData.slice(0,2);

    // Map the sliced data to extract the names
    const output = slicedFirstName.map((person) => person.name);
    render(output);
}

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