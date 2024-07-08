let fruits = ["Apple", "Cherry", "Pear"];

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// Example of a forEach loop with an array
fruits.forEach(function(fruit){
    console.log(fruit);
})

// Another example with forEach and index
// The benefit of this is that it grants you to the index of the items in the array, where as the prior for loop just loops from all the items.
fruits.forEach(function(fruit, index){
    console.log(`Fruit at index ${index}: ${fruit}`);
})

// Using ES6
fruits.forEach(fruit => {
    console.log(fruit)
})