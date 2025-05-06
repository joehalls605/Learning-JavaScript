const numbers = [5, 10, 15, 20, 25];

function sumNumbers(numbers){
    return numbers.reduce((sum, current) => sum + current);
}
sumNumbers(numbers);

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

//

function countWords(words){
   return words.reduce((count, word) => {
       // If the word is already in the count object, increment the value.
       if(count[word]){
           count[word] += 1;
       } else{
           count[word] = 1;
       }
       return count;
   }, {}) // the initial value of count is an empty object
}
console.log(countWords(words));


//

const numbers = [1,-2,3,-4,5,-6,7];

function sumPositiveNumbers(numbers){
    return numbers.reduce((total, current) => {
        if(current >= 0){
            return total += current;
        }
        else{
            return total;
        }
    }, 0)
}
sumPositiveNumbers(numbers);
// non arrow function version
function sumPositiveNumbers2(numbers){
    return numbers.reduce(function(total, current){
        if(current > 0){
            return total + current;
        } else{
            return total
        }
    }, 0);
}
//
const strings = ["alice", "bob", "alice"];
function countVotes(strings){
    return strings.reduce(function(total, current){
        if(total[current]){
            total[current] += 1;
        }
        else{
            total[current] = 1;
        }
        return total;
    }, {})
}
countVotes(strings);

const nums = [4,5,3,2,5];
function sumNumbers(arr){
    return arr.reduce((acc, current) => {
        return acc += current;
    })
}
sumNumbers(nums);

function findMax(arr){
    let largestNumber = 0;
    arr.reduce((acc, current) => {
        if(current > acc){
            largestNumber = current;
        }
    })
    return largestNumber;
}
findMax(nums);

function countOccurrences(arr, target){
    let appearances = 0;
    arr.reduce((acc, current) => {
        if(current === target){
            appearances++;
        }
    })
    return appearances;
}
countOccurrences(nums, 5);

// 4.?

function flattenArray(arr){
    return arr.reduce((acc, curr) => {
        return acc.concat(curr); // goes through each sub array and uses concat to build one big array
    }, []) // initial empty array
}
flattenArray([[1, 2], [3, 4], [5]]);


// 5.
function frequencyMap(arr){
    return arr.reduce((acc, curr) => {
        // if acc[curr] exists or is zero, add one to it, otherwise add one.
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {}) // start with an empty object
}
frequencyMap(['a', 'b', 'a', 'c', 'b', 'a']);








