/*
The .reduce method is used to reduce an array to a single value by applying a function to each element in the array.
 It processes each element of the array (from left to right) and accumulates a result.

Key Concepts
Accumulator: The accumulated result of the reduction. It starts with an initial value if provided.
Current Value: The current element being processed in the array.

How .reduce Works
The .reduce method takes a callback function and an optional initial value. 

The callback function has two main parameters:
Accumulator: The value returned from the previous iteration.
Current Value: The current element being processed.
*/

array.reduce((accumulator, currentValue) => {
  // operation to perform
}, initialValue);

const numbers = [1,2,4,6,7,42,1];
const summedNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const multipliedNumbers = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 0);

const multipliedNumbersNonArrowFunction = numbers.reduce(function(accumulator, currentValue){
  return accumulator * currentValue;
}, 1);


const numbers2 = [1, 2, 3, 4, 5];

const sumReducer = (accumulator, currentValue) => accumulator + currentValue;

const sum = numbers2.reduce(sumReducer, 0);

console.log(sum); // Output: 15


const items = [
  { name: "Rice", price: 5 },
  { name: "Book", price: 8 },
  { name: "Chicken", price: 10 }
];

const totalPrice = items.reduce((total, item) => {
  return total + item.price;
}, 0);

const totalPriceMultiplied = items.reduce((total, item) => {
  return total * item.price;
})

console.log(totalPrice); // Output: 23


const sales = [
  { product: 'Apple', amount: 50 },
  { product: 'Banana', amount: 30 },
  { product: 'Apple', amount: 25 },
  { product: 'Orange', amount: 40 },
  { product: 'Banana', amount: 20 }
];

const salesProduct = sales.reduce((acc, sale) => {
  if(!acc[sale.product]){  // if the sales product does not exist, set the key with a value of 0.
    acc[sale.product] = 0;
  }
  acc[sale.product] += sale.amount;
  return acc;
}, {})


/* Side point - when to use Dot Notation VS Bracket Notation
Use Dot Notation when you know the exact name of the property at the time of writing the code.

Use Bracket Notation when:
- The property name is stored in a variable
- The property name is dynamically generatd or contains spaces, special characters.
- You need to use a variable expression to specify the property

Here I'm using bracket notation because sale.product is a dynamic value and changes with each iteration based on the current sale.
*/