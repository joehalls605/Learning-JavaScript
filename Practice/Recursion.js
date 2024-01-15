/*Factorial Calculation:
Write a recursive function in JavaScript to calculate the factorial of a given positive integer n. 
Hint: The factorial of n is the product of all positive integers less than or equal to n.
*/

function factorialCalculation(n){
if(n <= 0){
return 1;
}
const result = n * factorialCalculation(n - 1);
return result;
}

/*
Fibonacci Sequence:
Implement a recursive function in JavaScript to find the nth term of the Fibonacci sequence. 
Remember that the Fibonacci sequence starts with 0 and 1, and each subsequent term is the sum of the two preceding terms.
*/

function fibonacciSequence(n) {
    if (n <= 1) {
        // Base case: return n for n <= 1
        return n;
    }
    // Recursive case: sum of (n-1) and (n-2)
    return fibonacciSequence(n - 1) + fibonacciSequence(n - 2);
}

/*
Array Sum:
Create a recursive function in JavaScript to find the sum of all elements in an array. 
The function should take an array as input and return the sum of its elements.
*/

function sumAll(array, index = 0, total = 0) {
    if (index >= array.length) {
        // Base case: log the result when all elements are summed
        console.log(total);
        return total;
    }
    // Recursive case: add the current element to the total and move to the next index
    return sumAll(array, index + 1, total + array[index]);
}