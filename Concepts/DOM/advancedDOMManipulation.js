// Dynamically create and add an element

let newDiv = document.createElement("div");
newDiv.classList.add("box");
newDiv.textContent = "I am a new box";
document.body.appendChild(newDiv);

// Remove an element from the DOM

let boxToRemove = document.querySelector(".box");
if(boxToRemove){
    boxToRemove.remove();
}

// Insert a new element before another element
let newP = document.createElement("p")
newP.textContent = "This is a paragraph";
let firstDiv = document.querySelector("div");
if(firstDiv){
    document.body.insertBefore(newP, firstDiv)
}

let newSpan = document.createElement("span");
newSpan.textContent = "This is a span";
let firstDiv = document.querySelector("div");
if(firstDiv){
    firstDiv.insertAdjacentElement("afterend", newSpan);  // Insert the span after the div
}

// Create list of items dynamically
let items = ["Item 1", "Item 2", "Item 3", "Item 4"];
let ul = document.createElement("ul");

items.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
})

document.body.appendChild(ul);

// Event delegation for dynamic content
let button = document.getElementById("addItemButton");
let itemList = document.getElementById("itemList");

button.addEventListener("click", function(){
    let li = document.createElement("li");
    li.textContent = "New Item";
    itemList.appendChild(li);
});
// Use event delegation for handling clicks on dynamically added items
itemList.addEventListener("click", function(e){
    if(e.target && e.target.nodeName == "LI"){
        alert("You clicked on" + e.target.textContent);
    }
});

// Modify a form input dynamically

let input = document.getElementById("myInput");
let button = document.getElementById("changePlaceholderButton");

button.addEventListener("click", function(){
    input.placeholder = "New placeholder text!"
});


// Add or edit table row
/*
HTML:
<table id="myTable">
  <tr><th>Name</th><th>Age</th></tr>
  <tr><td>John</td><td>30</td></tr>
  <tr><td>Jane</td><td>25</td></tr>
</table>
<button id="addRowButton">Add Row</button>
<button id="removeFirstRowButton">Remove First Row</button>
<button id="editSecondRowButton">Edit Second Row</button>
 */
let addRowButton = document.getElementById("addRowButton");
let removeFirstRowButton = document.getElementById("removeFirstRowButton");
let editSecondRowButton = document.getElementById("editSecondRowButton");
let table = document.getElementById("myTable");

addRowButton.addEventListener("click", function(){
    let newRow = table.insertRow();
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    cell1.textContent = "New Name";
    cell2.textContent = "New Age";
});

removeFirstRowButton.addEventListener("click", function() {
    table.deleteRow(1);
});

// Smooth scroll to a section on button click
/*
<button id="scrollButton">Scroll to Section</button>
<div style="height: 1000px;">Scroll down</div>
<section id="targetSection">This is the target section.</section>
 */

let scrollButton = document.getElementById("scrollButton");
let targetSection = document.getElementById("targetSection");

scrollButton.addEventListener("click", function(){
    targetSection.scrollIntoView({behavior:"smooth"});
});




















