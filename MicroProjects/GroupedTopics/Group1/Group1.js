/*
Micro JS Project: Data Management Tool
Objective:
Create a JavaScript tool that allows users to manage data with basic operations like adding, updating, and deleting entries. This project will reinforce concepts related to variables, data types, operators, and objects.

Steps and Concepts Covered:
Variables and Data Types:

Declaration (let, const)
Data types (string, number, boolean)
Type conversion (implicit and explicit)
Using the !! operator for boolean conversion
Objects:

Creating objects and accessing properties
Using objects to organize and manage data
Operators:

Arithmetic operators (+, -, *, /)
Comparison operators (==, ===, !=, !==, >, <, >=, <=)
Logical operators (&&, ||, !)
Assignment operators (=, +=, -=)
*/



// Initialise an array to store data entries (objects)

let dataEntries = [];

// Function to add new entry
function addEntry(name, age, isActive){

    let entry = {
        name: name,
        age: age,
        isActive: !!isActive // Converts isActive to boolean (practice), I could put true or false.
    };
    dataEntries.push(entry);
}

// Update existing entry
function updateEntry(index, newData){
    if(index >= 0 && index < dataEntries.length){
        // Merge existing data with new data
        // Data entries is an array of objects, ...dataEntries[index] accesses the object at specified index, new data is the new properties to be added
        dataEntries[index] = {...dataEntries[index], ...newData}
    }
    else{
        console.error("Invalid index for update");
    }
}

// Function to delete an entry by index
function deleteEntry(index) {
    if (index >= 0 && index < dataEntries.length) {
        dataEntries.splice(index, 1); // 1 parameter specifies how many elements should be removed starting from the index
    } else {
        console.error('Invalid index for delete.');
    }
}

// Example usage:
addEntry('Alice', 25, true);
addEntry('Bob', 30, false);
console.log('Initial Data Entries:', dataEntries);

updateEntry(1, { age: 32 }); // Update Bob's age
console.log('After Update:', dataEntries);

deleteEntry(0); // Delete Alice's entry
console.log('After Deletion:', dataEntries);

const dataListElement = document.getElementById("data-list");

dataEntries.forEach(entry => {
    const li = document.createElement("li");
    li.textContent = `Name: ${entry.name}, Age: ${entry.age}, Active: ${entry.isActive}`;
    dataListElement.appendChild(li);
});