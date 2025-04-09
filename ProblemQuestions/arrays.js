const numbers = [1,2,3,4,5,6];

function getEvenNumbers(numbers){
    return numbers.filter(function(number){
        return number % 2 === 0;
    })
}
getEvenNumbers(numbers);

// arrow function version
const getEvenNumbers = numbers => numbers.filter( num => num % 2 === 0);