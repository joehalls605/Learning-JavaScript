/*
A class is like a template or a blueprint that describes how an object should be created.
It encapsulates properties (attributes) and methods (functions) that the objects created from the class will have.
*/

/*
The constructor method is a special method that gets called when an object is created from the class. It initializes the object's properties.
*/

class Animal {

    constructor(name, sound){
        this.name = name;
        this.sound = sound;
    }

    makeSound(){
        console.log(this.sound);
    }
}

/*
Once you have a class, you can create objects (instances) based on that class using the new keyword.
*/

const cat = new Animal("Cat", "Meow");
const dog = new Animal("Dog", "Woof");
const sheep = new Animal("Sheep", "Baa")


class Person {
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
    }

    calculateBirthYear(){
        const currentYear = newDate().getFullYear();
        return currentYear - this.age;
    }

    isAdult(){
        return this.age >= this.age;
    }

    getEmail(){
        return this.email;
    }

    setEmail(newEmail){
        this.email = newEmail;
    }

}

const person1 = new Person("John Jacks", "25", "john@gmail.com")
person1.setEmail("johnjacks@gmail.com")
person1.setEmail("emailchanged@gmail.com")