let students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 75 },
    { name: "Charlie", score: 90 }
];

// Function to render student list

function renderStudentList(){
    const studentList = document.getElementById("student-list");
    studentList.innerHTML = "";

    students.forEach((student, index) => {
        let li = document.createElement("li");
        li.textContent = `${student.name} - ${student.score}`;
        studentList.appendChild(li);
    

    // Add a button to remove the student
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function(){
        removeStudent(index);
        };
    });
}

function addStudent(){
    const name = document.getElementById("studentName").value;
    const score = parseInt(document.getElementById("studentScore").value);

    if(name && !isNaN(score)){
        students.push({name, score});
        renderStudentList();
        document.getElementById("studentName").value = "";
        document.getElementById("studentScore").value = "";
    }
    else{
        alert("Please enter valid name and score")
    }
}

function removeStudent(index){
    students.splice(index, 1);
    renderStudentList();
}

// High order function examples:

function doubleScores(){
    students = students.map(student =>{
        return { ...student, score: student.score * 2}; // the ... copies all properties of the student object into the new object
    })
    renderStudentList();
}

function filterHighScorers(){
    const highScorers = student.filter(student => student.score > 80);
        console.log("High Scorers:", highScorers)
}

function calculateAverageScore(){
    const totalScore = students.reduce((acc, student) => acc + student.score, 0);
    const averageScore = totalScore / students.length;
    console.log("Average Score: ", averageScore);
    averageScoreElement = document.getElementById("AverageScore");
    averageScoreElement.textContent = averageScore;
}

renderStudentList();
