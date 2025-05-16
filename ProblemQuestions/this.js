let person = {
    name: "Alice",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    changeAge: function(age){
        this.age = age;
    }
};

function showInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

// 1.
person.greet();

// 2.
showInfo();

// 3.
person.changeAge(34);

// 4.
const boundShowInfo = showInfo.bind(person);
boundShowInfo();


//
let car = {
    make: "Tesla",
    model: "Model 3",
    year: 2022,
    showDetails: function() {
        console.log(`Car details: ${this.make} ${this.model}, ${this.year}`);

        // Using setTimeout
        setTimeout(function() {
            console.log(`Inside setTimeout: ${this.make} ${this.model}, ${this.year}`);
        }, 1000);

        // Using setTimeout with an arrow function
        setTimeout(() => {
            console.log(`Inside setTimeout (Arrow Function): ${this.make} ${this.model}, ${this.year}`);
        }, 1000);
    },
    updateYear: function(year){
        this.year = year;
    }
};

car.showDetails();
car.updateYear(2024);
car.showDetails();


let book = {
    title: "the twits",
    author: "joseph dons",
    year: 1998,
    getSummary: function(){
        console.log(`The book ${this.title} was written by ${this.author} in ${this.year}`);
    },
    updateYear: function(year){
        this.year = year;
    },
    changeAuthor: function(author){
        this.author = author;
    }
}
book.getSummary();
book.updateYear(2023);
book.changeAuthor("Phil barnes");






