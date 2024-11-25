/*
A comparator function is a function that defines an order for sorting elements. It is used by the sort method in JavaScript to determine the sequence of elements in an array.

The sort method in JavaScript is used to sort the elements of an array. By default, the sort method sorts elements as strings in ascending order. However, you can provide a comparator function to sort the elements based on custom criteria.

How it works:

A comparator function takes two arguments (let's call them a and b). It returns:

A negative number if a should come before b.
Zero if a and b are considered equal in terms of order.
A positive number if a should come after b.
*/


// First sorting in ascending order as mentioned. This sorts the numbers in ascending order because they are converted to strings and compared based on Unicode values.
let numbers = [4, 2, 5, 1, 3];
numbers.sort();
console.log(numbers); // Output: [1, 2, 3, 4, 5]


// A comparator function to sort the elements based on custom criteria.

numbers.sort(function(a,b){
    return a - b;
})

/*
When sort calls the comparator function with two elements (let's say 4 and 2), the function returns 4 - 2, which is 2 (a positive number). Since the result is positive, 4 comes after 2 in the sorted array.

If the function is called with elements (2 and 5), it returns 2 - 5, which is -3 (a negative number). Since the result is negative, 2 comes before 5.

This process continues for all pairs of elements in the array, resulting in a sorted array.
*/

// For strings you can use localeCompare method for alphabetical sorting.

let words = ['banana', 'apple', 'cherry'];

words.sort(function(a, b) {
    return a.localeCompare(b);
});