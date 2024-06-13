
const students = [
    {name: "Alice", score: 58},
    {name: "Jack", score: 23},
    {name: "Alex", score: 48},
    {name: "Orio", score: 27},
]

// Filter out students who passed
const isPassing = (student) => student.score >= 60; // returns true if student.score is greater than 60, or false otherwise.
const passingStudents = students.filter(isPassing); //  The .filter() method creates a new array containing all elements of the original array that satisfy the condition provided by the callback function (in this case, isPassing).

// Calculating the average score of passing students
const sum = (accumulated, current) => accumulated + current.score;
const totalScore = passingStudents.reduce(sum, 0); // reduce sums up the scores of the passing students and divides them by the number of passing students to get the average.
const averageScore = totalScore / passingStudents.length;

// Sort passing students by their scores in descending order
const compareScores = (a,b) => b.score - a.score; 
// above explained. if b.score is greater than a.score, it returns a positive number, meaning b should become before a
// if b.score is less than a.score, it returns a negative number, meaning a should become before b
// if they are equal it returns 0, meaning their order does not change.

// then .sort() sorts them in descending order.
const sortedPassingStudents = passingStudents.sort(compareScores)

const studentlistElement = document.getElementById("studentlist");
studentlistElement.innerHTML = "";

sortedPassingStudents.forEach(student => {
    const li = document.createElement("li");
    li.textContent = `${student.name} - ${student.score}`;
    studentlistElement.appendChild(li);
});

// Log the updated studentlistElement after appending list items
console.log(studentlistElement);

/*
How functional programming is used:

Functional Approach: The code uses functions (isPassing, sum, compareScores) to perform specific tasks:

Filtering: isPassing determines which students passed based on their score (filter function).
Summation: sum accumulates scores (reduce function) to calculate the total score of passing students.
Sorting: compareScores defines how to sort students (sort function) based on their scores in descending order.
Pure Functions: These functions are pure because:

They do not modify the original students array or any external state.
They produce deterministic results based only on their inputs (arguments).
Immutability: The use of filter, reduce, and sort functions ensures that operations are performed on copies or derived values (passingStudents and sortedPassingStudents), maintaining the immutability of the original students array.

Clarity and Reusability: Functional programming promotes clear, modular code where each function has a single responsibility and can be reused in different contexts. This approach enhances code maintainability and reduces bugs by minimizing side effects and mutable state.

This explanation highlights how functional programming concepts are applied in your JavaScript code to filter, transform, and manipulate data effectively while adhering to principles of immutability and purity.

*/