
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
