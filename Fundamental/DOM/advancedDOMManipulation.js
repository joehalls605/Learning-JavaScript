/*
Creating new elements: You can create entirely new HTML elements using JavaScript and insert them into the DOM.
*/

// creating an element
const newDiv = document.createElement("div");
newDiv.textContent = "Hello world!";
document.body.appendChild(newDiv);

// adding a class to element.
const element = document.getElementById("myElement");
element.classList.add("highlight");

// traversing and modifying the DOM tree.
const parent = document.getElementById("parentElement");
const child = document.getElementById("childElement");
parent.removeChild(child);

// Event handling

const button = document.getElementById("myButton");
button.addEventListener("click", function(){
    alert("button clicked");
});