const numbers = [1,2,3,4,5];

function printNumbers(numbers){
    numbers.forEach(number => {
        console.log(number);
    })
}
printNumbers(numbers);

function sumNumbers(numbers){
    let sum = 0;
    numbers.forEach(number => {
        sum += number;
    })
    return sum;
}
sumNumbers(numbers);

function countEvenNumbers(numbers){
    let count = 0;
    numbers.forEach(number => {
        if(number % 2 === 0){
            count ++;
        }
    });
    return count;
}
countEvenNumbers(numbers);

function multiplyByTwo(numbers){
    return numbers.map(number => {
        return number * 2;
    })
}
multiplyByTwo(numbers);

function numbersToStrings(numbers){
    return numbers.map(number => {
        return String(number);
    })
}
numbersToStrings(numbers);

function numbersToObjects(numbers){
    return numbers.map(number => (
        {[number]: number})
    )
}
numbersToObjects(numbers);

function logAndDouble(numbers){
    numbers.forEach(number => {
        console.log(number);
    });
    return numbers.map(number => {
        return number * 2;
    })
}
logAndDouble(numbers);


