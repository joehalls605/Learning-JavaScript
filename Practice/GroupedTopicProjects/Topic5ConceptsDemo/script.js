// Utility function to display output

function displayOutput(text){
    document.getElementById("output").innerHTML += text + "<br><br>";
}

// Clear previous output

function clearOutput(){
    document.getElementById("output").innerHTML = "";
}

const numbers = [1,2,3,4,5];

// Functional vs Imperative Programming

function functionExample(){
    clearOutput();


    // Functional approach using map()
    // 1. Declarative: We describe WHAT we want to achieve, not HOW to do it
    // 2. Immutable: We create a new array instead of modifying the original
    // 3. Pure function: map() doesn't cause side effects
    // 4. Higher-order function: map() takes a function as an argument

    const doubled = numbers.map(num => num * 2);
    displayOutput("Functional Programming Result" + doubled.join(", "));
}

function imperativeExample(){
    clearOutput();

    // Imperative approach using a for loop
    // 1. Procedural: We specify HOW to achieve the result step by step
    // 2. Mutable: We create an empty array and modify it in the loop
    // 3. Side effects: We're changing the state of 'doubled' outside the loop
    // 4. Lower-level control: We manage the iteration manually
    let doubled = [];
    for(let i = 0; i < numbers.length; i++){
        doubled.push(numbers[i] * 2);
    }
    displayOutput("Imperative Programming Result: " + doubled.join(", "));
}

// Prototyped based inheritance

function Animal(name){
    this.name = name;
}

Animal.prototype.speak = function(){
    return `${this.name} makes a sound.`;
}

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function(){
    return `${this.name} barks!`;
}

function prototypeExample() {
    clearOutput();
    const dog = new Dog("Buddy", "Golden Retriever");
    displayOutput(dog.speak());
    displayOutput(dog.bark());
    displayOutput(`Is dog an instance of Animal? ${dog instanceof Animal}`);
    displayOutput(`Is dog an instance of Dog? ${dog instanceof Dog}`);
}

// Class-based Inheritance
class Mammal {
    constructor(name) {
        this.name = name;
    }

    breathe() {
        return `${this.name} is breathing.`;
    }
}

class Cat extends Mammal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    meow() {
        return `${this.name} says: Meow!`;
    }
}

function classExample() {
    clearOutput();
    const cat = new Cat("Whiskers", "white");
    displayOutput(cat.breathe());
    displayOutput(cat.meow());
    displayOutput(`Is cat an instance of Mammal? ${cat instanceof Mammal}`);
    displayOutput(`Is cat an instance of Cat? ${cat instanceof Cat}`);
}

// Event Listeners
document.getElementById('functionalBtn').addEventListener('click', functionalExample);
document.getElementById('imperativeBtn').addEventListener('click', imperativeExample);
document.getElementById('prototypeBtn').addEventListener('click', prototypeExample);
document.getElementById('classBtn').addEventListener('click', classExample);