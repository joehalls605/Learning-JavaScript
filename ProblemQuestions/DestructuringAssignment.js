const userProfile = {
    name: "John",
    age: 30,
    location: "New York",
};

const favouriteColours = ["blue", "green", "red"];

const {name, age} = userProfile;
const [blue, green, red] = favouriteColours;

console.log(`Hello, my name is ${name}, I am ${age} years old, and my favourite colours are ${blue}, ${green}, ${red}.`);
