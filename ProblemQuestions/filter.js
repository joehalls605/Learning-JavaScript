function filterEvens(arr){
    return arr.filter(item => item % 2 === 0);
}
filterEvens([1,2,3,4,5,5,7,8,2]);

function filterPositive(arr){
    return arr.filter(item => item >= 0)
}
filterPositive([-2,1,-4,-5,-6,-9]);

function filterLongStrings(arr){
    return arr.filter(item => item.length > 3);
}
filterLongStrings(["hello", "bonjour", "replay", "box"]);

//4.
function removeFalsy(arr){
    return arr.filter(item => item)
}
removeFalsy(["john", undefined, null, 5]);

const people = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 16 },
    { name: "Diana", age: 19 }
];

function adultsOnly(arr){
    return arr.filter(item => item.age >= 18);
}
adultsOnly(people);

function startWithA(arr){
    return arr.filter(item => item[0] === "a");
}

startWithA(["apple", "banana", "avocado", "grape"]);

function filterInRange(arr) {
    return arr.filter(item => item >= 10 && item <= 50);
}

filterInRange([5, 12, 30, 60, 8, 45]); // ➞ [12, 30, 45]