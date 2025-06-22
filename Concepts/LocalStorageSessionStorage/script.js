// Save to LocalStorage ( string )
document.getElementById("saveLocal").addEventListener("click", ()=>{
    localStorage.setItem("user", "Alice");
    alert("Saved 'Alice' to localStorage");
});

// Load from localStorage
document.getElementById("loadLocal").addEventListener("click", () => {
    const user = localStorage.getItem("user");
    alert(`localStorage user: ${user}`);
});

// Save an object to localStorage
const userObject = {
    name: "Alice",
    age: 25
};
localStorage.setItem("userObject", JSON.stringify(userObject));

// Load object from localStorage
const savedData = JSON.parse(localStorage.getItem("userObject"));
console.log(`Name: ${savedData.name}, Age: ${savedData.age}`);

// Save to sessionStorage
document.getElementById("saveSession").addEventListener("click", () => {
    sessionStorage.setItem("score", "100");
    alert("Saved '100' to sessionStorage!");
});

// Load from sessionStorage
document.getElementById("loadSession").addEventListener("click", () => {
    const score = sessionStorage.getItem("score");
    alert(`sessionStorage score: ${score}`);
});