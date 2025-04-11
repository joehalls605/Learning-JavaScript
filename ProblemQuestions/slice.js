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
