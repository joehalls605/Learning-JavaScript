class User{
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, "just logged in")
        return this;
    }
    logout(){
        console.log(this.email, "just logged out");
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, "score is now", this.score)
        return this // returning this, which is this instance of the object, so we could chain it if we like
    }

}

/*
the 'new' keyword
- creates a new empty object {}
- sets the value of 'this' to be the new empty object
- calls the constructor method
*/

var userOne = new User("joeh@gmail.com", "joe"); // the 'this' is this object.
var userTwo = new User("billh@gmail.com", "bil"); // the 'this' is this object.

userOne.login();
userTwo.logout();

userOne.updateScore();
userOne.updateScore();
userTwo.updateScore();

userTwo.updateScore().login();

