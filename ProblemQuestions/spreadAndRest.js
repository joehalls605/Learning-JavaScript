// Rest and Spread
function sumAll(...args){
    let total = 0;
    for(let number of args){
        total += number;
    }
    return total;
}

const numbers = [1,2,3,4,5];
sumAll(...numbers);


// Spread objects

const basicInfo = {
    name: "Alice",
    age: 25
};
const contactInfo = {
    email: "alice@example.com",
    phone: "123-456-7890"
};

const fullProfile = {...basicInfo, ...contactInfo, isActive: true};

console.log(fullProfile);

// Spread arrays

const midtermScores = [88, 72, 95];
const finalScores = [91, 84, 77];

const allScores = [...midtermScores, ...finalScores];

const sortedScoresAscending = allScores.sort((a, b) => a - b);
console.log(sortedScoresAscending);
