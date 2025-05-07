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


function sumAllNumbers(...nums){
    return nums.reduce((acc, cur) => {
        return acc += cur;
    });
}
sumAllNumbers(1,2,3,5,6,3,2);

function highestNumber(...nums){
    let largestNumber = 0;
    for(num of nums){
        if(num > largestNumber){
            largestNumber = num;
        }
    }
    return largestNumber;
}
highestNumber(8,2,14,52,1,2);

const arr1 = [1, 2];
const arr2 = [3, 4];
// Create a new array with all values
// ➞ [1, 2, 3, 4]
const arr3 = [...arr1, ...arr2];
