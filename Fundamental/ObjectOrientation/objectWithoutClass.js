
function User(email, name){ // constructor
    this.email = email;
    this.name = name;
    this.online = false; // always set to false to begin with, info doesn't need to be passed in. Look below.
    this.login = function(){
        console.log(this.email, "has logged in"); // IMAGINE THIS IS DELETED AND BELOW USED INSTEAD.
    }
}

User.prototype.login = function(){ // going to the prototype (blueprint) and creating a function called login
    this.online = true; // this refers to userOne for example.
    console.log(this.email, "has logged in");
}

User.prototype.logout = function(){ // going to the prototype (blueprint) and creating a function called login
    this.online = false; // this refers to userOne for example.
    console.log(this.email, "has logged out");
}

function Admin(...args){ // ... takes the parameters and puts them into an array
    User.apply(this, args);  // runs the User constructor above, grabbing the args and applying.
    
}

var userOne = new User("joeh@gmail.com", "joe"); // creates an empty, binding context of this to the object, and passing it into the constructor function.
var userTwo = new User("jbeh@gmail.com", "jbe");
var admin = new Admin("boris@gmail.com", "boris");


userTwo.login();

// In a lot of cases it's better to use the prototype property to add methods.

