const array = [1,2,2,3];
function removeLastItem(array){
    array.pop();
    return array;
}
removeLastItem(array);

function popUntilEven(array){
    while(array.length > 0){
     const last = array.pop();
     if(last % 2 === 0){
         return last;
     }
    }
    return null;
}
popUntilEven(array);