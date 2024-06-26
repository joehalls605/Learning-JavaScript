let tasks = [
    { description: "Complete project report", priority: 5 },
    { description: "Schedule meeting with team", priority: 3 },
    { description: "Reply to emails", priority: 2 }
];

function renderTaskList(){
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = `${task.description} - Priority: ${task.priority}`;

        // Adding a button for removing items
        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function(){
            removeTask(index);
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);
    });
}

function addTask(){
    const description = document.getElementById("taskDescription").value;
    const priority = parseInt(document.getElementById("taskPriority").value, 10);

    if(description && !isNaN(priority)){
        tasks.push({description, priority});
        renderTaskList();
        document.getElementById("taskDescription").value = "";
        document.getElementById("taskPriority").value = "";
    }
    else{
        alert("Please enter valid description and priority");
    }
}

function removeTask(index){
    tasks.splice(index, 1);
    renderTaskList();
}

function doublePriorities(){
    tasks = tasks.map(task => {
        return {...task, priority: task.priority * 2};
    });
    renderTaskList();
}

function filterHigherPriorityTasks(){
    const highPriorityTasks = tasks.filter(task => task.priority > 4);
    console.log("High Priority Tasks:", highPriorityTasks);
}

function calculateAveragePriority() {
    const totalPriority = tasks.reduce((acc, task) => acc + task.priority, 0);
    const averagePriority = totalPriority / tasks.length;
    const averagePriorityElement = document.getElementById("averagePriority");
    averagePriorityElement.textContent = `Average Priority: ${averagePriority}`;
}

renderTaskList();
