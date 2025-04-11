const numbers = [1,2,3,4,5];

function doubleNumbers(numbers){
    numbers.forEach(function(num){
        console.log(num * 2);
    })
}
doubleNumbers(numbers);

const names = ["alice", "bob", "gerald", "peter"];

function capitaliseNames(names){
    names.forEach(function(name){
        console.log(name.charAt(0).toUpperCase() + name.slice(1));
    })
}
capitaliseNames(names);

function printMultiples(numbers, multiplier){
    numbers.forEach(function(num){
        console.log(num * multiplier);
    });
}
printMultiples([2,3,4,5,6], 3);