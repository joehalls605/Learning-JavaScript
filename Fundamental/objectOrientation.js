class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    makeSound(sound){
        console.log(`${this.name} makes a ${sound} sound`);
    }

}

const bear = new Animal("bear", 10);
bear.makeSound("growling");
console.log(bear);

