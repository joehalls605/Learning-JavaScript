// You are given an array of product prices in dollars. Your task is to sort them in ascending order.

let prices = [19.99, 5.49, 3.99, 100.0, 25.5];

const ascendingPrices = prices.sort((a,b) => a - b);
console.log(ascendingPrices);

// You have an array of student ages. Sort them in descending order (from oldest to youngest).

let ages = [18, 22, 19, 21, 20];

const descendingAges = ages.sort((a,b) => b - a);
console.log(descendingAges);

// You have an array of country names. Sort them in alphabetical order.

let countries = ["Germany", "Japan", "Canada", "Brazil", "Australia"];

const countriesAlphabetical = countries.sort();
console.log(countriesAlphabetical);


// You have an array of student objects, each with a name and score.
// Sort the students by their score in ascending order.

let students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 }
];

const studentsSorted = students.sort((a,b) => a.score - b.score);
console.log(studentsSorted);

// You have an array of words. Sort them based on their length (shortest to longest).

let words = ["apple", "banana", "kiwi", "cherry", "fig"];

const lengthSorted = words.sort((a,b) => a.length - b.length);

console.log(lengthSorted);

// You have an array of dates in string format. Sort them from oldest to newest.

let dates = ["2024-03-15", "2023-06-01", "2025-01-10", "2022-09-30"];

const datesSorted = dates.sort((a,b) => new Date(a) - new Date(b));
console.log(datesSorted);
