// 1.

const student = { name: "Liam", grade: "A", subject: "Math" };
const key = "grade";

console.log(student[key]);

// 2.

const colors = ["red", "green", "blue"];
const index = 1;

console.log(colors[index]);

// 3.
const car = {};
const propName = "year";
car[propName] = 2024;

console.log(car[propName]);

// 4.
const movie = { title: "Inception", director: "Nolan", year: 2010 };

for(const key in movie){
    console.log(movie[key]);
}

// 5.
const data = {
    user: {
        info: {
            name: "Eva"
        }
    }
};
const level1 = "user";
const level2 = "info";
const level3 = "name";

console.log(data[level1][level2][level3]);
