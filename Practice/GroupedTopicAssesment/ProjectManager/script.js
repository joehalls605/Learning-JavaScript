class Task {
    constructor(id, title, completed) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(title) {
        const id = Date.now().toString();
        const newTask = new Task(id, title, false);
        this.tasks.push(newTask);
    }

    toggleTaskCompletion(taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = !task.completed;
        } else {
            console.log(`Task with ID ${taskId} not found.`);
        }
    }

    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

    getTasks(filterCompleted) {
        if (filterCompleted) {
            return this.tasks.filter(task => task.completed === true);
        } else {
            return this.tasks;
        }
    }

    getStatistics() {
        const totalTasks = this.tasks.length;
        const completedTasks = this.tasks.filter(task => task.completed).length;
        const incompleteTasks = totalTasks - completedTasks;
        console.log(`Total Tasks: ${totalTasks}, Completed: ${completedTasks}, Incomplete: ${incompleteTasks}`);
    }
}

// Example usage
const taskManager = new TaskManager();

// Adding tasks
taskManager.addTask("Go to the shops");
taskManager.addTask("Do homework");

// Toggle task completion
taskManager.toggleTaskCompletion(taskManager.tasks[0].id);

// Delete task
taskManager.deleteTask(taskManager.tasks[1].id);

// Get tasks and statistics
console.log(taskManager.getTasks()); 
taskManager.getStatistics(); 
