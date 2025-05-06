const array = [2,3,3,2,2,5,8,9,3];

function getSubArray(array, startIndex, endIndex){
    return array.slice(startIndex, endIndex);
}

getSubArray(array, 2, 8);

function removeFirstLast(array){
    return array.slice(1, array.length -1);
}
removeFirstLast(array);


function reverseArray(array){
    return array.slice().reverse(); // by using slice, this creates a new shallow copy of the array, if I just used reverse this modifies the original.
}
reverseArray(array);

function getFirstAndLast(array){
    const first = array.slice(0,1);
    const last = array.slice(array.length - 1);
    return [...first, ...last];
}
getFirstAndLast(array);

const numbers = [12,3,45,3,2,1];

function extractSubarray(arr, start, end){
    return arr.slice(start,end);
}
extractSubarray(numbers, 5, 8);

function getFirstNElements(arr, n){
    return arr.slice(0, n);
}
getFirstNElements(numbers, 5);

function removeFirstNElements(arr, n){
    return arr.slice(n);
}
removeFirstNElements(numbers, 4);

function cloneArray(arr){
    return arr.slice();
}
cloneArray(numbers);

function getLastNElements(arr, n){
    return arr.slice(arr.length - n);
}
getLastNElements(numbers, 2);

function getMiddleElements(arr){
    const mid = Math.floor(arr.length / 2); // Find middle index
    if(arr.length % 2 === 0){
        return arr.slice(mid - 1, mid + 1);  // Even length: two middle elements
    }
    else{
        return arr.slice(mid, mid + 1);// Odd length: single middle element
    }
}
getMiddleElements(numbers);

// Mini practice

const numbers = [1,2,3,4,5,6];
console.log(numbers.slice(1,3));
console.log(numbers.slice());
console.log(numbers.length - 1);


// Working backward from the array

function lastThreeElements(arr){
    return arr.slice(-3);
}
lastThreeElements(numbers);

function allButLastTwo(arr){
    return arr.slice(0, -2);
}
allButLastTwo(numbers);

function thirdAndSecondFromEnd(arr){
    return arr.slice(-3, -1);
}
thirdAndSecondFromEnd(numbers);

function removeFirstAndLast(arr){
    return arr.slice(1, arr.length -1);
}
removeFirstAndLast(numbers);




















