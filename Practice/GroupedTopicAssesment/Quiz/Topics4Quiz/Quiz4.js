// Assessment on JavaScript Classes

// 1. Classes (declaration, properties, methods)
// 1.1. Class Declaration
// Declare a class named `Person` with properties `name` and `age`.
class Person {
    // 1.2. Properties
    // Declare properties inside the constructor method
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
  
    // 1.3. Methods
    // Declare a method named `greet` that returns a greeting message
    greet(){
        return "Hello, welcome to the application!"
    }
  }
  
  // 2. Constructor method
  // 2.1. Create an instance of the Person class
  const person1 = new Person("Joe", "26");

  
  // 2.2. Use the instance to call the greet method and log the result
  console.log(person1.greet());
  
  // 3. Instance methods
  // 3.1. Add an instance method named `celebrateBirthday` that increments the person's age by 1
  
  person1.celebrateBirthday = function(){
    this.age  ++;
    return `Happy Birthday! ${this.name} is now ${this.age} years old`;
  }
  
  // 3.2. Create another instance of the Person class and call the celebrateBirthday method
 
  const person2 = new Person("Jack", 27);
  person2.celebrateBirthday();

  // 4. Static methods
  // 4.1. Add a static method named `compareAges` that compares the ages of two Person instances
  Person.compareAges = function(person1, person2){
    if(person1.age > person2.age){
        return `${person1.name} is older than ${person2.name}`;
    }
    else if(person1.age < person2.age){
        return `${person2.name} is older than ${person1.name}`;
    }
    else{
        return `${person1.name} and ${person2.name} are the same age.`
    }
  }
  
// 5. Encapsulation, getters and setters

class EncapsulatedPerson{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    // Getter for name
    get name(){
        return this._name;
    }

    set name(newName){
        if(typeof newName === "string" && newName.length > 0){
            this._name = newName;
        }
        else{

        }
    }

    get age(){
        return this._age;
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.log("Invalid age");
        }
    }

    
}

const encapsulatedPerson = new EncapsulatedPerson("Charlie", 35);
encapsulatedPerson.name = "David";

encapsulatedPerson.age =-1 // should log an error!
