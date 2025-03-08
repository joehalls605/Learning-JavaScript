/*
Explanation:

`for...in`: Used to iterate over the keys (or properties) of an object.
It will loop through the property names of the `book` object (such as `title`, `author`, `year`).

`for...of`: Used to iterate over the values in an iterable (like an array or string).
It behaves when working with the values inside an array of book details.
*/

const book = {
    title: "JavaScript Essentials",
    author: "John Doe",
    year: 2021
};

// for... in to access the keys of the object

for(const key in book){
    console.log(key + ":" + book[key]); // // Output each key and its corresponding value
}

// for...of to access the values inside an array

const bookValues = Object.values(book); // Convert the book object into an array of its values
// now it looks like this: ["JavaScript Essentials", "John Doe", 2021]


for(const values of bookValues){
    console.log(value); // Output each value from the array
}

// 2nd example - display room details in a hotel system

const roomData = {
    deluxe: { capacity: 2, price: 150, amenities: ["WiFi", "TV", "Mini Bar"] },
    economy: { capacity: 1, price: 80, amenities: ["WiFi", "TV"] },
    suite: { capacity: 4, price: 250, amenities: ["WiFi", "TV", "Mini Bar", "Jacuzzi"] }
};

// Using `for...in` to iterate over the room types (keys)
for(const roomType in roomData){
    const details = roomData[roomType]; // Get the room details
    console.log("Room price:" + details.price);

    for(const amenity of details.amenities){
        console.log("    * " + amenity);
    }
}



