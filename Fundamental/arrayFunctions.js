// .push adds one or elements to the end of the array and returns the new length of the aray.
let fruits = ["apple", "bananna"]
fruits.push("orange");

// .pop removes the last element from the array and returns the element
let apples = ["red", "green", "yellow"]
fruits.pop(); // this would now be [red, yellow]

//.shift removes the first element from the array and returns the element
let countries = ["brazil", "argentina", "france"]
countries.shift(); // this would now be [argentina, france]

// .unshift adds one or more elements to the beginning of the array and returns the new length of the array.
let guests = ["Jack", "Phil"]
guests.unshift("Boris");

// .map creates a new array with the results of calling a provided function every element in the calling array
let numbers = [1,2,3,4]
let doubled = numbers.map(num => num * 2);

// .filter creates a new array with all the elments that pass the test implemented by the provided function
let numbers2 = [1,2,3,4,5];
let evenNumbers = numbers2.filter(num => num % 2 === 0);

// .reduce applies a function against an accumulator and each element in the array, to reduce it to a single value

let numbers3 = [1,2,3,4,5];
let sum = numbers3.reduce((accumulator, currentValue) => accumulator + currentValue, 0)


// .forEach executes a provided function for each array element
let dogs = ["pip", "jacko"]
dogs.forEach(dog => alert("I'm" + dog))

// .find returns the value of the first element in the array that satisfies the provided testing function, otherwise undefined is returned.
let people = ["Jack", "Jeff"]
people.find(person => person == "Jack");

// .findIndex returns the index of the first element in the array that satisfies the provided test function, otherwise -1 is returned
let figures = [1,5,3,3];
let locatedFigure = figures.findIndex(figure => figure > 1);

// .includes determines whether an array includes a certain value among its entries, returning true or false

let weather = ["cloudy", "rainy", "sunny"]
weather.includes("rainy");

// .slice returns a copy of a portion of an array into a new array object selected from start to end (end not included)
let fruits2 = ["apple", "pear", "mango"]
let citrus = fruits2.slice(1,3); // pear, mango

// .concat merges two or more arrays. This method does not change the existing arrays, but returns a new array
let allFruits = fruits.concat(fruits2);

// .sort sorts the elements of an array in place and returns the array. The default order is ascending.
fruits.sort();
// When to use foreach vs map