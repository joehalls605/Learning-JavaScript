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
}


// ARRAY FUNCTIONS
function charAtFunction(sampleData){
    sampleData.forEach(element => {
    const character = element.name.charAt(0);
    console.log(`charAt: ${character}`);
    return character;
    });
}

function filterFunction(sampleData){
  const filteredByAge = sampleData.filter(person => person.age > 25);
  console.log(filteredByAge);
  return filteredByAge;
}


// ARRAY RENDERING METHOD
