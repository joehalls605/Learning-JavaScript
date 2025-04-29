// JSON.parse converts JSON string into a JavaScript object

const jsonString = '{"name: "Joe", "age":30 "}';
const person = JSON.parse(jsonString);
console.log(person.name); // Outputs: John

// JSON.stringify converts JavaScript object into JSON string

const person = {name: "John", age: 30};
const jsonString = JSON.stringify(person);
console.log(jsonString);
