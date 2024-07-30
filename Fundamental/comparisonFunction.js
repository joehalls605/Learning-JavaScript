/*
In JavaScript, a comparison function is used to determine the order of elements when sorting an array. It helps decide whether one element should come before, after, or remain in the same place relative to another element.

What a Comparison Function Does
A comparison function takes two elements, a and b, and returns:

A negative number if a should come before b.
A positive number if a should come after b.
Zero if a and b are considered equal in sorting order.

The code can be written in this way for ascending order:
*/

let numbers = [10, 5, 100, 1];

const sortedNumbers = numbers.sort((a,b) => {
    if(a < b){
        return - 1;
    }
    else if(a > b){
        return 1;
    }
    else{
        return 0;
    }
})


// shorter version

// 2 - 5 = -3 (negative value) = a before b
// 100 - 4 = 96 (positive value)  = b before a

const sortedNumbers2 = numbers.sort((a,b) => {
   return a - b;
})


const dogs = [
    {bread: labrador, age: 8},
    {bread: spaniel, age: 12},
    {bread: pug, age: 3}
];

const comparatorAge = () => {
    return a.age - b.age;
}

const comparatorBreadLength = () => {
    return a.bread.length - b.bread.length;
}

console.log(dogs.sort(comparatorAge))

// When sorting an array, you pass this comparison function to the .sort() method. The .sort() method uses this function to compare pairs of elements and determine their order.

numbers.sort((a,b) => a - b);
console.log(numbers); // Output: [1, 5, 10, 100]

/*
Here’s what happens in this example:

(a, b) => a - b is the comparison function.
For each pair of elements, it calculates the difference a - b.

If a is smaller than b, a - b is negative, so a comes before b.

If a is larger than b, a - b is positive, so b comes before a.

If a and b are equal, a - b is zero, so their order remains unchanged.
*/
