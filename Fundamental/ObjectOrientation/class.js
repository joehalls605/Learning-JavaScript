/* These classes are actually pretend classes. Built into the language to emulate how classes behave.
Classes are a thin layer of abstraction built onto the js prototype model. Syntatic sugar.
*/
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

class Admin extends User{
    deleteUser(user){
        users = users.filter(u =>{
            return u.email != user.email; // if user email is not equal to user.email, returns true. If false filters it out.
        });
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
var admin = new Admin("shaun@ninjas.com", "shaun");



userOne.login();
userTwo.logout();

userOne.updateScore();
userOne.updateScore();
userTwo.updateScore();

userTwo.updateScore().login();

var users = [userOne, userTwo];
admin.deleteUser(userTwo);
console.log(users);

