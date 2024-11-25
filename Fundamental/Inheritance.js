class User {
  constructor(username) {
    this.username = username;
    this.loggedIn = false;
    this.score = 0;
  }

  login() {
    if (!this.loggedIn) {
      this.loggedIn = true;
      console.log(`${this.username} logged in.`);
    } else {
      console.log(`${this.username} is already logged in.`);
    }
  }

  logout() {
    if (this.loggedIn) {
      this.loggedIn = false;
      console.log(`${this.username} logged out.`);
    } else {
      console.log(`${this.username} is already logged out.`);
    }
  }

  updateScore(points) {
    if (this.loggedIn) {
      this.score += points;
      console.log(`${this.username}'s score updated to ${this.score}.`);
    } else {
      console.log(`${this.username} needs to log in first.`);
    }
  }
}


class Admin extends User{
// Inherits all functionality from User
// By default uses User constructor

deleteUser(user){
  users = users.filter(u => {
    return u.email != user.email; // returns true, keeps user in the array or returns false, filters it out of the arry
  });
}
}

var userOne = new User("ryan@gmail.com", "Ryu")
var userTwo = new User("yoshi@mariokorp.com", "Yoshi")
var admin = new Admin("jackson@gmail.com", "Jackson");

var users = [userOne, userTwo];

admin.deleteUser(userTwo);


// pre ES6 way of setting up inheritance:


// Parent constructor function
function Animal(name) {
    this.name = name;
  }
  
  // Method for parent constructor function
  Animal.prototype.sayName = function() {
    console.log("My name is " + this.name);
  }
  
  // Child constructor function inheriting from Animal
  function Dog(name, breed) {
    Animal.call(this, name); // Call the parent constructor function with the current context
    this.breed = breed;
  }
  
  // Set up inheritance
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  // Method for child constructor function
  Dog.prototype.bark = function() {
    console.log("Woof!");
  }
  
  // Create an instance of Dog
  var myDog = new Dog("Buddy", "Labrador");
  
  // Call methods
  myDog.sayName(); // Output: My name is Buddy
  myDog.bark();    // Output: Woof!


// Step 1: Define a constructor function for vehicles
function Vehicle(make, model, year) {
    // Define properties for the Vehicle object
    this.make = make;
    this.model = model;
    this.year = year;
}

// Step 2: Add a method to the Vehicle prototype
Vehicle.prototype.start = function(){
    // Method to start the vehicle and log a message
    console.log("Starting the " + this.make + " " + this.model);
}

// Step 3: Define a constructor function for cars
function Car(make, model, year, numDoors){
    // Call the Vehicle constructor to initialse common properties
    Vehicle.call(this, make, model, year);
    // Define additional property specific to cars
    this.numDoors = numDoors;
}

// Inherit methods from Vehicle prototype for cars
Car.prototype = Object.create(Vehicle.prototype); // creates a new object that inherits from vehicle prototype.
Car.prototype.constructor = Car;

/*
In JavaScript, when you create a new object using Object.create(), the newly created object inherits properties from its prototype object. 
However, the constructor property of the prototype doesn't automatically point back to the constructor function it's supposed to represent.
By explicitly setting Car.prototype.constructor = Car;, we ensure that the constructor property of objects created with the Car constructor correctly 
points back to the Car constructor function itself. This is just to maintain consistency and ensure that the constructor property reflects the 
correct constructor function for the object.
*/

// Step 4: Define a constructor function for trucks
function Truck(make, model, year, payloadCapacity){
    // Call the Vehicle constructor to initialise common properties
    Vehicle.call(this, make, model, year);
    // Define additional property specific to trucks
    this.payloadCapacity = payloadCapacity;
}

// Inherit methods from Vehicle prototype for trucks
Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

// Step 5: Create an instance of a Truck object
let myTruck = new Truck("Ford", "F-150", 2018, "1500 lbs");

// Step 6: Call the inherited method to start the truck
myTruck.start();
