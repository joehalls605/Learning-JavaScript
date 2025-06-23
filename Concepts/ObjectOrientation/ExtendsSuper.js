// In JavaScript, 'extends' and 'super' are used for inheritance.

// 'extends' lets a class (child) inherit from another class (parent).
// 'super' calls the parent’s constructor or methods inside the child class.


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
        // Call the parent class (Animal) constructor with 'super', saves having to write
        super(name); // Calls Animal's constructor and sets this.name
        this.breed = breed;
    }

    speak(){
        console.log(`${this.name} barks`);
    }
}


class Bird {
    constructor(age){
        this.age = age;
    }
    speak(){
        console.log(`Sqwark sqawrk`);
    }
}

class Pigeon extends Bird{
    constructor(name, age){
        super(age);
        this.name = name;
    }
    story(){
        console.log(`the ${this.age} years old ${this.name} flew from the tree`);
    }
}

const pigeon = new Pigeon("Gerald", 3);
pigeon.story();
pigeon.speak();
