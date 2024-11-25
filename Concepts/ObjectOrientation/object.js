// Object practice (if we only need one object)

var userOne = {
    email: "joe@gmail.com",
    name: "joee",
    login(){
        console.log(this.email, "has logged in") // refers to this object
    },
    logout(){
        console.log(this.email, "has logged out");
    }
}; // object literal

console.log(userOne.name);

userOne.name = "Yoshi";
// changes the name

userOne.email; // joe@gmail.com

userOne['email'] // joe@gmail.com

// How to add on properties or methods to objects that already exist.

userOne.age = 25

// Avoidable but works if needed
userOne.logiInfo = function(){

};

// Should be set-up in creation of object.



// Object practice (if we need more than one object, we create a class) Refer to class.js in this folder.