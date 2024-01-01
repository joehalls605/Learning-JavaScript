// 1. Object Initialization:
// TODO: Write a JavaScript object named `car` with properties for `make`, `model`, and `year`.

let car = {
    make: "Renault",
    model: "Clio",
    year: "2011"
}

// 2. Accessing Object Properties:
// TODO: Access and log the value of the `model` property from the `car` object.

console.log(car.model);

// 3. Modifying Object Properties:
// TODO: Change the `year` property of the `car` object to the current year and log the modified object.

const currentYear = new Date().getFullYear();
car.year = currentYear;
console.log(car);

// 4. Adding Object Properties:
// TODO: Add a new property named `color` to the `car` object and set it to "blue". Log the updated object.

car.color = "blue";
console.log(car);

// 5. Object Methods:
// TODO: Create a method within the `car` object called `startEngine` that logs the message "Engine started!" when called.

const car = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    startEngine: function () {
        console.log("Engine started!");
    },
};

// Call the `startEngine` method
car.startEngine();


// 6. Object Iteration:
// TODO: Write a loop to iterate through all properties of the `car` object and log each key-value pair.



// 7. Object Comparison:
// TODO: Create another object named `anotherCar` with similar properties. Write a function to compare if two objects are equal (have the same properties and values).
