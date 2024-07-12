/*
The .reduce method is used to reduce an array to a single value by applying a function to each element in the array.
It processes each element of the array (from left to right) and accumulates a result.

Used for Summing numbers, calculating averages, find the maximum or minimum value.

How reduce Works:
Accumulator: This is the accumulated result of the reduction. It starts with an initial value if provided.
Current Value: This is the current element being processed in the array

Overview:
accumulator: The accumulated value previously returned in the last iteration, or initialValue, if supplied.
currentValue: The current element being processed in the array.
initialValue: A value to use as the first argument to the first call of the callback function (optional).

*/
array.reduce((accumulator, currentValue) => {
    // operation to perform
  }, initialValue);
  

// Example

const numbers = [1, 2, 3, 4, 5];

// This defines the reducer function to sum up numbers. It returns the sum of the accumulator and currentValue
const sumReducer = (accumulator, currentValue) => accumulator + currentValue;

// Use reduce to get the sum of all numbers.
const sum = numbers.reduce(sumReducer, 0); // sumReducer is the function that will be applied to each element. 0 is initial value. 
// the accumulator is the first number in the numbers array which is 1

console.log(sum); // Output: 15

const numbers2 = [1,4,5,7,8];

const sumReducer2 = (accumulator, currentValue) => accumulator + currentValue;

const sum2 = numbers2.reduce(sumReducer2, 0);


// Example

const items = [
    {name: "Rice", price: 5},
    {name: "Book", price: 8},
    {name: "Chicken", price: 10}
]

// let totalPrice = 0
// items.forEach(item => {
//     totalPrice += item.price;
// })

// loops through each item, every time it brings back the total from previous iteration and adds the item.price to it. 
const totalPrice = items.reduce((total, item)=>{
 return total + item.price;
}, 0)


const people = [
    {name: "Joe", age: 26},
    {name: "Jack", age: 32},
    {name: "Jeff", age: 21}
]

people.reduce((groupedPeople, person)=>{
    const age = person.age;
    // if we already have a value for that age
    if(groupedPeople[age] == null) groupedPeople[age] = []
    groupedPeople[age].push(person)

    // returns grouped object
    return groupedPeople
}, {}) 

const sales = [
    { product: 'Apple', amount: 50 },
    { product: 'Banana', amount: 30 },
    { product: 'Apple', amount: 25 },
    { product: 'Orange', amount: 40 },
    { product: 'Banana', amount: 20 }
  ];

  const salesByProduct = sales.reduce((acc, sale) =>{
    // Check if this product doesn't exist in the accumulator object yet
    if(!acc[sale.product]){
        // If it doesn't exist, initialise it with 0
        acc[sale.product] = 0;
    }
    // Add the current sale amount to the total for this product
    acc[sale.product] += sale.amount;
    return acc;
  }, {})


  const salesByFruit = sales.reduce((acc, sale)=>{
    // checking if this fruit doesn't exist in the accumulator object yet
    if(!acc[sale.product]){
      // if it doesn't exist, initialise with 0
      acc[sale.product] = 0;
    }
    // Add the current sale amount to the total for this fruit
    acc[sale.product] += sale.amount;
  }, {})