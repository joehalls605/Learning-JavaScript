console.log("I'm working");

let todos = [
    {task: "go to shop"},
    {task: "go to bed"}
];
const maximumTodos = [];
const todoList = document.getElementById("todoList");

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
   })
}

renderTodos();