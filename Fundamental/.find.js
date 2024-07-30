/*
.find() is a JavaScript array method that helps you locate the first element in an array that meets a specific condition. It returns the value of that element if found, or undefined if no such element exists.
*/

const numbers = [10, 20, 39, 54];

const result = numbers.find(function(number) {
    return number > 25;
});

console.log(result); // Output: 39


const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const result2 = users.find(function(user) {
    return user.id === 2;
});

console.log(result2); // Output: { id: 2, name: 'Bob' }
