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

// Appending a child

document.addEventListener("DOMContentLoaded", ()=>{
    const newDiv = document.createElement("div");
    newDiv.textContent = "Hello! I'm a new div";
    newDiv.classList.add("highlight");

    document.body.appendChild(newDiv);
});

// Modifying multiple elements at once

document.querySelectorAll(".item").forEach(item =>{
    item.style.color = "blue";
    item.classList.add("styled-item");
});

// Event delegation
document.querySelector("#parent").addEventListener("click", event => {
    if (event.target.classList.contains("child")) {
        console.log("A child element was clicked:", event.target);
    }
});

/*
Here, only clicks on elements with the class child within #parent will trigger the event, making it efficient to handle many items or dynamically created children.
*/

// Toggling Classes for Styling Transitions

const box = document.getElementById("box");
box.addEventListener("click", ()=>{
    box.classList.toggle("expanded"); // toggles the expanded class on and off
});

/* Building interactive dropdown menu
<button id="dropdownButton">Toggle Menu</button>
<ul id="dropdownMenu" class="hidden">
     <li>Option 1</li>
    <li>Option 2</li>
    <li>Option 3</li>
</ul>
*/

const button2 = document.getElementById("dropdownButton");
const menu = document.getElementById("dropdownMenu");

button2.addEventListener("click", () => {
    menu.classList.toggle("hidden");    // Toggle visibility
});

// Using Template Literals for Dynamic HTML

const container = document.getElementById("container");
const items = ["Item 1", "Item 2", "Item 3"];

container.innerHTML = items.map(item => `<p>${item}</p>`).join("");

/*
This code dynamically generates a list of <p> elements based on an array of items and injects them into #container.
*/

// Animating Elements with JavaScript

const box2 = document.getElementById("box");

function animateBox(){
    let position = 0;
    const interval = setInterval(()=>{
        if(position >= 200){
            clearInterval(interval); // stop the animation at 200px
        }
        else{
            position++;
            box.style.left = position + "px";
        }
    }, 5)
}

animateBox();

