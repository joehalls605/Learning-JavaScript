/*
.find() is used to find the first element in an array that satisfies a testing function.
it returns th value of the first element that matches the condition, or undefinded if no matching element is found.
*/

const numbers = [10,20,39,54];

const result = numbers.find(function(number){
    return number > 25;
});

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const result2 = users.find(function(user){
    return user.id === 2;
})