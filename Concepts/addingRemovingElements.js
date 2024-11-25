/*
lastChild: This property in JavaScript allows you to access the last child node within a specified parent element. 
For instance, if you have a <div> element with several child nodes like <p>, <span>, or other elements,
 lastChild lets you directly target and manipulate the very last child node without needing to loop through all the child elements.

appendChild: This method is used to add a new child node to an existing parent node. Say you have a <div> and you want to dynamically add a new <p> element inside it. 
You'd use appendChild to do just that. It simplifies the process of dynamically generating and inserting content into a webpage.

Understanding Similar Functions: Besides lastChild and appendChild, you might also encounter firstChild, which retrieves the first child node of a parent element, useful for accessing and manipulating the initial child node. 
Another essential method is removeChild, which, as the name suggests, removes a specific child node from its parent, helping maintain a clean and organized DOM structure as you dynamically add or remove content.

createElement: This method is used to dynamically create a new HTML element within the document. 
Let's say you want to generate a new <div> or <span> element programmatically. createElement allows you to do just that. 
You specify the type of element you want to create, and then you can further customize it with attributes, text content, and even add it to the document using appendChild. 
This function is crucial for building dynamic user interfaces and adding new content on-the-fly.
*/


/*
<div id="container"></div>
<button id="addButton">Add Paragraph</button>
*/

let container = document.getElementById('container');
let addButton = document.getElementById('addButton');

function addParagraph() {
    let newParagraph = document.createElement('p');
    newParagraph.textContent = "This is a new paragraph.";
    container.appendChild(newParagraph);
}

addButton.addEventListener('click', addParagraph);

/*
<div id="container"></div>
<button id="addButton">Add Paragraph</button>
<button id="removeButton">Remove Paragraph</button>
*/

let container2 = document.getElementById("container");
let addButton2 = document.getElementById("addButton");
let removeButton = document.getElementById("removeButton");

function addParagraph(){
    let newParagraph = document.createElement('p');
    newParagraph.textContent = "this is a new paragraph";
    container2.appendChild(newParagraph);
}

function removeParagraph() {
    if (container2.lastChild) {
        container2.removeChild(container.lastChild);
    }
}

addButton2.addEventListener('click', addParagraph);
removeButton.addEventListener('click', removeParagraph);