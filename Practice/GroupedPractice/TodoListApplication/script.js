console.log("I'm working");

let todos = [
    {task: "go to shop", completed: false},
    {task: "go to bed", completed: false},
    {task: "go to store", completed: false}
];
const todoList = document.getElementById("todoList");
console.log(todos);
renderTodos();

function addTodo(){
    const addTodoElement = document.getElementById("addTodo");
    const addTodoAnswer = addTodoElement.value;
    console.log("this is the todo"+ addTodoAnswer);
    todos.push({task: addTodoAnswer});
    console.log(todos);
    todoList.innerHTML = "";
    renderTodos();
}

function renderTodos(){

    const todosListElement = document.getElementById("todoList");

   todos.forEach((todo, index)=> {
    const li = document.createElement("li");
    li.textContent = `${todo.task}`;
    todosListElement.appendChild(li);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete"
    li.appendChild(deleteButton);
    deleteButton.addEventListener("click", ()=> deleteTodo(index))
    
    const toggleButton = document.createElement("button");
    toggleButton.textContent = todo.completed ? "Uncomplete" : "Complete";
    toggleButton.addEventListener("click", ()=> {toggleTodoCompletion(index)});
    li.appendChild(toggleButton);
    todosListElement.appendChild(toggleButton);
   })
}

function deleteTodo(index){
    todoList.innerHTML = "";
    todos.splice(index, 1);
    renderTodos();
}

function toggleTodoCompletion(index){
    todoList.innerHTML = "";
    todos[index].completed = !todos[index].completed;
    renderTodos();
}

