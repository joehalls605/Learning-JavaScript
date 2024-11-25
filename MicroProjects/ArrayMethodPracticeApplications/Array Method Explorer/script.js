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





// ARRAY RENDERING METHOD
function render(value){
    const outputElement = document.getElementById("output");
    outputElement.append(value);
}