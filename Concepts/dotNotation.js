/*
User .notation to reach into object properties, when you know the name of the property.
*/

 person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

// Accessing a property
console.log(person.name);  // Output: Alice

// Modifying a property
person.age = 26;  // Changing the age to 26
console.log(person.age);  // Output: 26