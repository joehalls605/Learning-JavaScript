/*
In object-oriented programming (OOP), extends and super are keywords used in languages like Java and JavaScript for inheritance. They help in creating a new class (a child class) that inherits properties and methods from an existing class (a parent class).

Key Concepts
extends: Used to create a subclass that inherits from a superclass (parent class).
super: Used to call the constructor and methods of the parent class within the child class.
*/

class Animal {
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal{
    constructor(name, breed){

        // Call the parent class (Animal) constructor with 'super'
        super(name);
        this.breed = breed;
    }

    speak(){
        console.log(`${this.name} barks`);
    }
}