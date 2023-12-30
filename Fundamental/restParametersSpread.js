/* The spread syntax in JavaScript allows for the representation of an indefinite set of elements in an array. It can be employed to pass multiple values as individual arguments to a function,
 making it a flexible and concise way to work with arrays. */


function sum(...numbers){
    return numbers.reduce((total, num) => total + num, 0);
}

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result);
