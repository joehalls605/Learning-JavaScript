const input = document.getElementById("item-input");
const button = document.getElementById("add-button");
const list = document.getElementById("item-list");

// Simple list of items that can be deleted
button.addEventListener("click", () => {
    const itemText = input.value.trim();
    if(itemText !== ""){
        const li = document.createElement("li");
        li.textContent = itemText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete"
        deleteBtn.addEventListener("click", function(){
            list.removeChild(li);
        });

        li.appendChild(deleteBtn);
        list.appendChild(li);
        input.value = "";
    }
})

// // Version that uses localStorage
//
// // Load saved items
// let items = JSON.parse(localStorage.getItem("myListItems")) || [];
//
// // Render all saved items
// items.forEach(renderItem);
//
// button.addEventListener("click", () => {
//     const itemText = input.value.trim();
//
//     if(itemText !== ""){
//         items.push(itemText);
//         saveItems();
//         renderItem(itemText);
//         input.value = "";
//     }
// });
//
// function renderItem(text){
//     const li = document.createElement("li");
//     li.textContent = text;
//
//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "X";
//     deleteBtn.style.marginLeft = "10px";
//
//     deleteBtn.addEventListener("click", () => {
//         list.removeChild(li);
//         items = items.filter(item => item !== text);
//         saveItems();
//     });
//     li.appendChild(deleteBtn);
//     list.appendChild(li);
// }
//
// function saveItems(){
//     localStorage.setItem("myListItems", JSON.stringify(items));
// }





















