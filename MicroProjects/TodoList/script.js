class ToDo {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      if (!task) {
        throw new Error("Task cannot be empty");
      }
      this.tasks.push(task);
    }
  
    removeTask(index) {
      if (index < 0 || index >= this.tasks.length) {
        throw new Error("Invalid task index");
      }
      this.tasks.splice(index, 1);
    }
  
    displayTasks() {
      const todoList = document.getElementById("todo-list");
      todoList.innerHTML = "";
  
      this.tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = task;
        listItem.addEventListener("click", () => this.removeTask(index));
        todoList.appendChild(listItem);
      });
    }
  }
  
  const todoApp = new ToDo();
  
  function addTodo() {
    const inputElement = document.getElementById("todo-input");
    const task = inputElement.value.trim();
  
    try {
      todoApp.addTask(task);
      todoApp.displayTasks();
      inputElement.value = "";
    } catch (error) {
      alert(error.message);
    }
  }
  
  todoApp.displayTasks();
  