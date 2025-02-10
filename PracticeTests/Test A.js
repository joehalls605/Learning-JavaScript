// Question 1

function checkNumberType(num){
    if(num > 0){
        return "Positive";
    }
    else if(number < 0){
        return "Negative";
    }
    else{
        return "Zero"
    }
}
checkNumberType(5);

// Question 2

function convertToString(value){
    const string = String(value);
    return string;
}
convertToString(9);
convertToString(true);


// Question 3

const person = {
    name: "John",
    age: "25",
    isStudent: true
}

function getPersonInfo(obj){
    if(obj.isStudent){
        return `John is 25 years old and is a student`;
    }
    if(obj.isStudent === false){
        return `John is 25 years old and is not a student`
    }
}
getPersonInfo(person);

// Question 4

function getDayName(dayNumber){
    switch(dayNumber){
        case 1: console.log("Monday");
        break;
        case 2: console.log("Tuesday");
        break;
        case 3: console.log("Wednesday");
        break;
        case 4: console.log("Thursday");
        break;
        case 5: console.log("Friday");
        break;
        case 6: console.log("Saturday");
        break;
        case 7: console.log("Sunday");
        break;
    }
}
getDayName(5);


// Question 5

function checkEvenOdd(num){
    let isOdd =  num % 2 === 0 ? "Even" : "Odd";
    return isOdd;
}
checkEvenOdd();

// Question 6

function sumNumbers(n){
    for(i = 0; i <= n; i++){
        console.log(i);
    }
}
sumNumbers(10);

// Question 7

function findFirstMultipleOfFIve(arr){
    for(i = 0; i < arr.length; i++){
        if(arr[i] % 5 === 0){
            return arr[i];
        }
    }
    return null;
}
const array = [1,2,3,4,5,6,7,8,9,10];
findFirstMultipleOfFIve(array);

// Question 8

function doubleNumbers(arr){
   const doubledNumbers = arr.map(num => num * 2);
   return doubledNumbers;
}
doubleNumbers(array);

// Question 9

function getEvenNumbers(array){
    const evenNumbers = array.filter(num => num % 2 === 0);
    return evenNumbers;
}
getEvenNumbers(array);

// Question 10

const numbers = [1,2,3,4,5,6,7,2, -1, 20, -2];
function findFirstNegativeNumber(numbers){
    const firstNegative = numbers.find(num => num < 0);
    return firstNegative;
}
findFirstNegativeNumber(numbers);

// Question 11

function reverseArray(arr){
    const reversed = arr.reverse();
    return reversed;
}
reverseArray(numbers);

// Question 12

function sortArray(arr){
    const sorted = arr.sort((a,b) => a - b);
    return sorted;
}
sortArray(numbers);

// Question 13

function removeFirstAndLast(arr){
    const removedFirst = arr.shift();
    const removedLast = arr.pop();
    return arr;
}
removeFirstAndLast(numbers);

// Question 14

function addToBeginning(numbers, num){
    const newArray = numbers.unshift(num);
    return newArray;
}
addToBeginning(numbers, 4);

// Question 15

const arrayOne = [1,2,3];
const arrayTwo = [4,5,6];

function mergeArrays(arrayOne, arrayTwo){
    const mergedArrays = [...arrayOne, ...arrayTwo];
    return mergedArrays;
}
mergeArrays(arrayOne, arrayTwo);

// Question 16

const nums = [1,2,3,3,4,5,5,4];

function removeDuplicates(nums){
    const arrayWithoutDuplicates = new Set(nums);
    return arrayWithoutDuplicates;
}
removeDuplicates(nums);

// Question 17

function multiplyArray(arr){
    const product = arr.reduce((total, current) => total * current);
    return product;
}
multiplyArray(nums);

// Question 18

function countOccurrences(arr, target){
    let count = 0;
    arr.forEach(item => {
       if(item === item){
           count++;
       }
    })
    return count;
}
countOccurrences(nums, 3);

// Question 19

const numsForSplice = [1,2,3,4,5,6,7];
const items = [8,9,10];

function spliceArray(numsForSplice, start, deleteCount, ...items){
   numsForSplice.splice(start, deleteCount, ...items);
   return numsForSplice;

}
spliceArray(numsForSplice, 0, 3, ...items);


// Question 20

const x = [1,2,3,4,5];
const y = [2,3,4,5,2];

function combineArrays(x,y){
    let result = [];
    for(let i = 0; i < x.length; i++){
        result.push(x[i] + y[i]);
    }
    return result;
}
combineArrays(x,y);


// Question 21

const nums = [1,2,3,4,5, null];

function findMaxNumber(arr) {
    return Math.max(...arr);
}
findMaxNumber(nums);

// Question 22

function removeFalsyValues(nums){
    const cleanArray = nums.filter(value => !!value) // Keep only truthy values
    return cleanArray;
}
removeFalsyValues(nums);

// Question 23

function doubleArrayValues(arr){
    return arr.map(item => item * 2)

}
doubleArrayValues(nums);



/* Topics to revise more:

Conditionals else if
switches
Ternary repetition
for loops a bit of repetition

 */