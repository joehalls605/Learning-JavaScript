/* JSON -> JavaScript Object:
   JSON.parse(jsonString)
   This reads JSON from server or localStorage

   JavaScript -> JSON
   JSON.stringify(jsObj)
   Send data to server or store it locally
 */

// JSON -> JavaScript Object
const jsonString = '{"name: "Alice", "age": 25}';
const jsObject = JSON.parse(jsonString);

// JavaScript -> JSON
const user = {
    name: "Bob",
    age: 30
};
const json = JSON.stringify(user);


// Practice
const dataFromServer = '{"bookingId": "123", "firstName": "John", "attendees": 4}';

// Convert it to a JavaScript object
const jsonObj = JSON.parse(dataFromServer);
// Then log bookingId and attendees
console.log(jsonObj.bookingId + " " + jsonObj.attendees);


const user = { name: "Luna", email: "luna@example.com" };
// 1. Save to localStorage (must stringify)
localStorage.setItem("user", JSON.stringify(user));

// 2. Load from localStorage
const stored = localStorage.getItem("user");
const parsed = JSON.parse(stored);

console.log(parsed.name); // Output: Luna


const user = { name: "Luna", email: "luna@example.com" };
let userGrabbed = localStorage.getItem("user");
let parsedUser = JSON.parse(userGrabbed);

parsedUser.age = 28;
localStorage.setItem("user", JSON.stringify(parsedUser));

