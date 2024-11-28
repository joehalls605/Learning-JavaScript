// Function to manipulate the string based on the input and display results
function manipulateString() {
    const inputString = document.getElementById("stringInput").value;

    // Original String
    document.getElementById("originalString").innerText = inputString;

    // Length of the string
    document.getElementById("lengthResult").innerText = inputString.length;

    // Uppercase version
    document.getElementById("uppercaseResult").innerText = inputString.toUpperCase();

    // Lowercase version
    document.getElementById("lowercaseResult").innerText = inputString.toLowerCase();

    // First character
    document.getElementById("firstCharResult").innerText = inputString.charAt(0);

    // Slice the string (from 0 to 4)
    document.getElementById("sliceResult").innerText = inputString.slice(0, 4);

    // Replace a word in the string (e.g., replace "World" with "JavaScript")
    document.getElementById("replaceResult").innerText = inputString.replace("World", "JavaScript");

    // Trim leading and trailing spaces
    document.getElementById("trimResult").innerText = inputString.trim();

    // Split the string into an array based on space separator
    document.getElementById("splitResult").innerText = inputString.split(" ").join(", ");
}
