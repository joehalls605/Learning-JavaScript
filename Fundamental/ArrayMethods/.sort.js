/*
The .sort() method in JavaScript is used to sort the elements of an array in place. 
It modifies the original array and returns the sorted array. 

By default, .sort() converts the elements to strings and sorts them in ascending order based on their UTF-16 code unit values. 
This default behavior may not always work as expected for numbers or custom sorting needs.

For example:
*/

let numbers = [10, 5, 100, 1];
numbers.sort();

console.log(numbers); // Output: [1, 10, 100, 5]

/*
In the example above, the numbers are sorted as strings, so '10' comes before '100' because the comparison is based on character codes, not numeric values. 

To sort numbers correctly, you need to provide a comparison function to the .sort() method. 
This function determines the order of elements based on their numeric values.
*/

let numbers2 = [10, 5, 100, 1];

numbers2.sort((a, b) => a - b);

let numbers3 = [29, 45, 82, 12];

numbers3.sort((a, b) => a - b);

console.log(numbers2); // Output: [1, 5, 10, 100]

/*
Here's how the comparison function works:

1. Comparison Function: The comparison function `(a, b) => a - b` is used to determine the order of elements. 
It takes two arguments, `a` and `b`, which are two elements from the array.

2. Comparison Logic:
   - The function calculates the difference `a - b`.
   - If the result is negative (`a < b`), `a` comes before `b`.
   - If the result is positive (`a > b`), `a` comes after `b`.
   - If the result is zero (`a === b`), `a` and `b` are considered equal, and their order remains unchanged.

3. Sorting Process: JavaScript's `.sort()` method uses this comparison function to arrange the elements in ascending order based on the result of the subtraction. For example:
   - When comparing `10` and `5`, the result of `10 - 5` is `5` (positive), so `10` will be placed after `5`.
   - When comparing `100` and `10`, the result of `100 - 10` is `90` (positive), so `100` will be placed after `10`.

In summary, by using a comparison function, you can ensure that `.sort()` handles numbers or other complex sorting needs correctly.
*/
