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