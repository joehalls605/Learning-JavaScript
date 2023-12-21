
//OBJECTS

let person = {
    name:"Bob",
    age: 30,
    greet: function(){
        console.log("Hello!");
    }
}

console.log(person.name);
console.log(person);
person.greet();

// Object with nested objects

let personTwo = {
    name: "Alice",
    age: "25",
    address: {
        city: "Wonderland",
        country: "FantasyLand"
    },
    greet: function(){
        console.log("Hello")
    }
}

console.log(personTwo.name)
console.log(personTwo.address.city);
personTwo.greet();

// Object with Arrays

let student = {
    name: "Charlie",
    grades: [90, 84, 32, 59],
    calculateAverage: function(){
        let sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    }
};

console.log(student.name);
console.log(student.grades);
console.log("Average Grade:", student.calculateAverage());

// Object with methods and this.

let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    start: function(){
        console.log(this.brand) + "" + this.model + " is starting...";
    },
    drive: function(speed){
        console.log("Driving at" + speed + "mph");
    }
};

car.start();
car.drive(60)

// Object with constructor function

function Dog(name, age){
    this.name = name;
    this.age = age;
    this.bark = function(){
        console.log("Woof woof!");
    }
}

// Object with Getters and Setters

let temperature = {
    _celsius: 25,
    get fahrenheit(){
        return this._celsius * 9 /5 + 32;
    },
    set fahrenheit(value){
        this._celsius = (value - 32) * 5/9;
    }
};

console.log(temperature.fahrenheit); // Accessing getter
temperature.fahrenheit = 77; // Setting value through setter, assigning a value invokes this.


// Object with dynamic property names:

let propertyName = "color";

let shirt = {
    size: "Medium",
    [propertyName]: "Blue",
    "brand": Nike
};

console.log(shirt.size);
console.log(shirt.color); // Accessing dynamic property