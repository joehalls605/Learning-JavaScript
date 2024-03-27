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
