/*
filter Method.

What it does:
filter creates a new array with all elements that pass the test implemented by the provided function.
In other words, it filters out elements that do not meet the condition.

What is the difference betwen filter and find?
Find locates the first element in an array that satisfies a testing function
Filter creates a new array with all the elements that pass the test implemented by the function
*/


const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

const filteredUsers = users.filter(function(user) {
  return user.id > 1;
});

console.log(filteredUsers); // Output: [{ id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }]


const numbers = [1, 2, 3, 4, 5, 6];

// Function to test if a number is even
const isEven = number => number % 2 === 0;

// Use filter to get only the even numbers. Creates a new array.
const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers); // Output: [2, 4, 6]



const numbers2 = [1, 2, 8, 4, 5, 3];

// This defines an arrow function name isEight. The function takes a single parameter number, and returns true if the number is 8.
const isEight = number => number === 8;

// It then uses the filter method to create a new array numberEight, it calls the isEight function on each element of numbers2 array.
// Only elements that return true are included in the new array
const numberEight = numbers2.filter(isEight);

console.log(numberEight); // Output: [8]

const numbers3 = [1,4,3,5,7,8];

const isOdd = numbers3.filter(num => num % 2 !== 0);


const products = [
    { id: 1, name: "Laptop", price: 999, category: "Electronics" },
    { id: 2, name: "Book", price: 15, category: "Books" },
    { id: 3, name: "Smartphone", price: 599, category: "Electronics" },
    { id: 4, name: "Desk Chair", price: 250, category: "Furniture" },
    { id: 5, name: "Headphones", price: 100, category: "Electronics" },
    { id: 6, name: "Novel", price: 8, category: "Books" },
  ];

  const filterByCategory = (category) =>{
    return products.filter(product => product.category === category);
  }

  const filterByPrice = (minPrice, maxPrice) => {
    return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
  }

  const filterByProductName = (productName) => {
    return products.filter(product => product.name === productName);
  }

  const filterByLaptop = () =>{
      return products.filter(product => product.name === "Laptop");
  }