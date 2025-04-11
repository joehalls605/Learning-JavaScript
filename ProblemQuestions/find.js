const array = [1,2,3,5,5,3];

function findFirstEvenNumber(array){
    return array.find(function(number){
        return number % 2 === 0;
    });
}
findFirstEvenNumber(array);

