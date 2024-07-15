/*
  JavaScript Topics Covered:
  - Function declaration
  - Function invocation
  - Parameters and arguments
  - Return statements
  - Anonymous functions (function expressions)
  - Immediately Invoked Function Expressions (IIFE)
  - Arrow functions
  - Rest and spread operators
  - Default parameters
  - Higher-order functions (Array methods)
*/

// Initial array of tasks
let tasks = [];

// Function to display tasks in the UI
function displayTasks() {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.textContent = task.name;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', () => completeTask(index));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(index));

    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);
    todoList.appendChild(taskItem);
  });
}

// Function to add a new task
function addTask(taskName) {
  tasks.push({ name: taskName, completed: false });
  displayTasks();
}

// Function to mark a task as completed
function completeTask(index) {
  tasks[index].completed = true;
  displayTasks();
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

// Event listener for form submission
const todoForm = document.getElementById('todo-form');

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const todoInput = document.getElementById('todo-input');
  const taskName = todoInput.value.trim();
  if (taskName !== '') {
    addTask(taskName);
    todoInput.value = '';
  }
});

// Immediately Invoked Function Expression (IIFE) to initialize the application
(function() {
  displayTasks(); // Initial display of tasks
})();
