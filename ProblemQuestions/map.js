const numbers = [1,2,3,4,5,6];

function doubledNumbers(nums){
    return nums.map(num => num * 2);
}
doubledNumbers(numbers);


const names = ['alice', 'BOB', 'ChArLiE'];
// all to lower
// first to upper

function capitaliseNames(names){
    const lowercase = names.map(name => name.toLowerCase());
    return lowercase.map(name => name.charAt(0).toUpperCase() + name.slice(1));
}
capitaliseNames(names);


//
const users = [
    { firstName: 'john', lastName: 'doe' },
    { firstName: 'JANE', lastName: 'SMITH' },
    { firstName: 'alice', lastName: 'JOHNSON' }
];

function capitaliseWord(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // ?
}

//
function getFullNames(users){
    return users.map(user => {
        const first = capitaliseWord(user.firstName);
        const last = capitaliseWord(user.lastName);
        return `${first} ${last}`
    });
}
getFullNames();

//
const numbers = [1, 2, 3, 4, 5, 6];

function transformNumbers(numbers){
    return numbers.map(function(number){
        if(number % 2 === 0){
            return number * 2;
        }
        return number * 3;
    });
}
transformNumbers(numbers);

const words = ['hello', 'world', 'javascript', 'map'];

function reverseAndCapitalise(words){
    const reversedWord = word.split("").reverse().join("");
    return reversedWord.charAt(0).toUpperCase() + reversedWord.slice(1).toLowerCase();
}
reverseAndCapitalise(words);

