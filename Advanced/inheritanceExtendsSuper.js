/*
JavaScript inheritance allows you to create a class that inherits properties and methods from another class. This is done using the extends keyword, and the super keyword is used to call the constructor of the parent class or to access its methods.

The extends keyword is used in class declarations to create a class that is a child of another class.
This means that the child class inherits all properties and methods from the parent class, but can also have additional properties and methods of its own.

The super keyword is used to call the constructor of the parent class from within the child class's constructor.
It can also be used to call methods of the parent class from within the child class.
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
    constructor(name, breed) {
      super(name); // Calls the constructor of the parent class (Animal)
      this.breed = breed;
    }
  
    speak() {
      super.speak(); // Calls the speak method of the parent class
      console.log(`${this.name} barks.`);
    }
  }

  const myDog = new Dog('Rex', 'German Shepherd');
  myDog.speak();

/*
Parent Class (Animal):

The Animal class has a constructor that initializes the name property.
It also has a method speak() that logs a message to the console.

Child Class (Dog):
The Dog class uses the extends keyword to inherit from Animal.
Its constructor takes two parameters: name and breed.
The super(name) call inside the Dog constructor calls the Animal constructor, initializing the name property.
The Dog class also has an additional property breed.
It overrides the speak() method to call the parent class's speak() method using super.speak(), and then adds additional behavior (logging that the dog barks).
*/


class Bear {
    constructor(name) {
        this.name = name;
    }

    growl() {
        console.log("roar");
    }
}

class BrownBear extends Bear {
    constructor(name, breed) {  // Corrected parameter name
        super(name);
        this.breed = breed;  // Corrected property name
    }
}

const brownBear = new BrownBear('Grizzly', 'Brown');  // Pass the required arguments
brownBear.growl();  // This will call the growl method from the Bear class


  

  