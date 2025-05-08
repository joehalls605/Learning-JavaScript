// 1.
const person = {
    name: "Alex",
    greet: function(){
        console.log("Hello my name is" + this.name);
    }
}
person.greet();

// 2.
function Animal(type){
    this.type = type;
    this.describe = function(){
        console.log("I'm a " + this.type);
    }
}
const cat = new Animal("cat");
cat.describe();

// 3.
const car = {
    brand: "Toyota",
    getBrand: function(){
        console.log(this.brand);
    }
};
car.getBrand();

// 4.
class Student {
    constructor(name) {
        this.name = name;
    }
    introduce() {
        console.log("Hi I'm" + this.name);
    }
}

const student = new Student("Sam");
student.introduce();


// 5.
const button = {
    text: "Click me!",
    handleClick: function() {
        console.log(this.text);
    }
};

const handler = button.handleClick;
handler(); // ❌ undefined, it loses its object context
const fixedHandle = button.handleClick.bind(button);

