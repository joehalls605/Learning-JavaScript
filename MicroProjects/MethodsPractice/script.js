function performOperations() {
    const inputString = document.getElementById('inputString').value;
    let output = '';

    // Using .charAt()
    const charAtExample = inputString.charAt(0);
    output += `First character using .charAt(): ${charAtExample}\n`;

    // Using .includes()
    const includesExample = inputString.includes('a');
    output += `String includes 'a': ${includesExample}\n`;

    // Using .slice()
    const sliceExample = inputString.slice(1, 4);
    output += `Sliced string from index 1 to 3: ${sliceExample}\n`;

    // Using .filter()
    const filterExample = inputString.split("").filter(char => char !== " ");
    output += `Filtered string without spaces: ${filterExample.join("")}\n`;

    // Using .map()
    const mapExample = inputString.split("").map(char => char.toUpperCase());
    output += `Mapped string to uppercase: ${mapExample.join("")}\n`;

    // Using .reduce()
    const reduceExample = inputString.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    output += `Sum of character char codes: ${reduceExample}\n`;

    // Using for loop
    let forLoopExample = "";
    for (let i = 0; i < inputString.length; i++) {
        forLoopExample += inputString.charAt(i) + " ";
    }
    output += `Characters separated by spaces using for loop: ${forLoopExample.trim()}\n`;

    document.getElementById('output').innerText = output;
}

function displayMessage(message) {
    console.log(message);
}
