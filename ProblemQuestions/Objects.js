function createStudent(){
    const student = {
        name: "Joseph",
        age: 28,
        isEnrolled: true,
        courses: ["Biology", "Chemistry", "Maths"],
        greet: function(){
            console.log(`Hello, my name is${this.name}, and I am ${this.age} years old`);
        }
}
    return student;
}

const student = createStudent();
console.log(student.greet);

function createBook(title, author, year){
    const book = {
        title: title,
        author: author,
        year: year,
        isAvailable: true,
        borrowBook: function(){
            isAvailable = false;
            console.log(`You have borrowed ${this.title}`);
        },
        returnBook: function(){
            isAvailable = true;
            console.log(`You have returned ${this.title}.`);
        }
    }
    return book;
}

const book = createBook("JS Basics",  "John Doe", 2023);
book.borrowBook();
book.returnBook();


function createUserProfile(username, email, age){
    const user = {
    username,
    email,
    age,
    updateEmail:function(newEmail){
        this.email = newEmail;
        console.log(`updated to ${this.email}`);
    },
    celebrateBirthday:function(){
        this.age++;
        console.log(`Happy Birthday, ${this.username}! You are now ${this.age}!`);
    }
    }
    return user;
}

const user = createUserProfile("jane_doe", "jane@example.com", 25);
user.updateEmail("new-janeemail@gmail.com");
user.celebrateBirthday(user.age);
console.log(user.email);