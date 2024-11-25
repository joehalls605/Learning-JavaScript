/*
Traversing the DOM means moving around the structure of an HTML document to find and manipulate elements. 
Here's a simple explanation of how to do it:

Starting Point: You need a starting point in the DOM from where you want to begin traversing. 
This could be the document itself or any element within it.

Methods and Properties: 
JavaScript provides various methods and properties to traverse the DOM. 

Some commonly used ones include:

parentNode: Gets the parent node of an element.
childNodes: Gets a collection of child nodes of an element.
firstChild and lastChild: Get the first and last child nodes of an element.
nextSibling and previousSibling: Get the next and previous sibling nodes of an element.
querySelector and querySelectorAll: Allows you to find elements using CSS selectors.
Looping: You often use loops, such as for or while loops, to traverse through multiple elements or nodes.

Conditionals: You might use conditional statements, like if statements, to check certain conditions while traversing the DOM.
*/

//Starting Point
const rootNode = document;

// Start from a specific element
const startingElement = document.getElementById('myElement');

//Methods and Properties:

// parentNode:
const parent = startingElement.parentNode;

// childNodes:
const children = startingElement.childNodes;

// firstChild and lastChild:
const firstChild = startingElement.firstChild;
const lastChild = startingElement.lastChild;

// nextSibling and previousSibling:
const next = startingElement.nextSibling;
const previous = startingElement.previousSibling;

// querySelector and querySelectorAll:
const selectedElement = document.querySelector('.myClass');
const selectedElements = document.querySelectorAll('p');

// Looping
for (let i = 0; i < startingElement.childNodes.length; i++) {
    const childNode = startingElement.childNodes[i];
    // Do something with childNode
}

//Conditionals
if (startingElement.parentNode !== null) {
    // Element has a parent
} else {
    // Element doesn't have a parent
}