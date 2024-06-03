class Animal{

    constructor(name, sound){
        this.name = name;
        this.sound = sound;
    }

    makeSound(){
        console.log(this.sound);
    }
}

const dog = new Animal("Dog", "Woof!");