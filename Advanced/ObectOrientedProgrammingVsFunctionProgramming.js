/*
Object-Oriented Programming (OOP) and Functional Programming (FP) are two major paradigms for building software, including JavaScript applications. 

Object-Oriented Programming (OOP)
Core Concepts: Objects, Classes, Inheritance, Encapsulation, Polymorphism.

Structure: Code is organized into objects which encapsulate data and behavior. Objects are instances of classes.

State Management: Objects maintain state which can be changed through methods.
*/

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  let d = new Dog('Rex');
  d.speak(); // Rex barks.
  

/*
Functional Programming (FP)
Core Concepts: Pure Functions, Higher-Order Functions, Immutability, First-Class Functions, Recursion.

Structure: Code is organized into functions which are pure (no side effects) and operate on immutable data.

State Management: State is managed through function parameters and return values rather than being stored in objects.
*/