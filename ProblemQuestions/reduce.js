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






