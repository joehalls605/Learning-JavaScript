// DOM Elements

const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

function createTaskElement(taskContent){
    const li = document.createElement("li");
    li.classList.add("task-item");

    const span = document.createElement("span");
    span.textContent = taskContent;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    li.appendChild(span);
    li.appendChild(deleteBtn);

    span.addEventListener("click", function(){
            li.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", function(){
        li.remove();
    })

    return li;
}

// Function to handle adding a task
addTaskBtn.addEventListener("click", function(){
    const taskContent = taskInput.value.trim();

    if(taskContent !== ""){
        const newTask = createTaskElement(taskContent);
        taskList.appendChild(newTask);
    }
    taskInput.value = "";
});