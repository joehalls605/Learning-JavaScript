const addElement = () =>{
    const ul = document.getElementById('elementList');
    const li = document.createElement('li');
    const text = document.createTextNode(`Element ${ul.children.length + 1}`); //
    li.appendChild(text);
    ul.appendChild(li);
}

const removeElement = () =>{
    const ul = document.getElementById('elementList');
    if(ul.children.length > 0){
        ul.removeChild(ul.lastElementChild);
    }
};

// Function to clear all list items from the ul
const clearElements = () =>{
    const ul = document.getElementById('elementList');
    ul.innerHTML = ''
}

const element = document.querySelector('paragraph-one'); // Finds the first element with class 'exa

ocument.getElementById('addBtn').addEventListener('click', addElement);
document.getElementById('removeBtn').addEventListener('click', removeElement);
document.getElementById('clearBtn').addEventListener('click', clearElements);