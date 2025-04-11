/*
 The forEach method in JavaScript is a built-in array method that allows you to iterate over each element in an array and execute a function for each element.
 */

array.forEach(function(element, index, array) {
    // code here
});

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number * 2);
});

/*
Here, the forEach method also logs the index of each element (which starts at 0), and we add 1 to it to start the numbering at 1.
 */

const fruits = ["apple", "banana", "cherry"];
fruits.forEach(function(fruit, index){
    console.log(index + 1 + "." + fruit);
})

/*
Real Project Example -  You have a list of items to display on a webpage. You can use forEach to loop through the array of items and generate HTML dynamically.
 */
const shoppingList = ["Milk", "Eggs", "Bread", "Butter"];
shoppingList.forEach(function(item){
    const li = document.createElement("li");
    li.textContent = item;
    document.getElementById("shopping-list").appendChild(li);
});

/*
Real Project Example - Handling a form with checkboxes
 */
const checkboxes = document.querySelectorAll('input[type="checkbox"]'); // ?
checkboxes.forEach(function(checkbox){
    checkbox.addEventListener("change", function(){
        if(checkbox.checked){
            console.log(checkbox.value + "is checked");
        }
        else{
            console.log(checkbox.value + "is unchecked");
        }
    })
});

// Real Project Example - processing data
const users = [
    { name: 'John', age: 28 },
    { name: 'Jane', age: 22 },
    { name: 'Alice', age: 30 }
];

users.forEach(function(user){
    user.isAdult = user.age >= 18;
});
