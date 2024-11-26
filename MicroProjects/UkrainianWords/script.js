const wordsData = [
    { ukrainian: "Привіт", english: "Hello" },
    { ukrainian: "Книга", english: "Book" },
    { ukrainian: "Дякую", english: "Thank you" },
    { ukrainian: "Паляниця", english: "Bread" },
    { ukrainian: "Школа", english: "School" }
];

let currentWords = [...wordsData]; // Initialize currentWords with wordsData
let isShowingEnglish = true; // Track display state

renderWords(currentWords);

function renderWords(data) {
    const wordContainerElement = document.getElementById("word-container");
    wordContainerElement.innerHTML = "";

    data.forEach((word) => {
        const wordCardElement = document.createElement("div");
        wordCardElement.innerHTML = `
        <h3>${word.ukrainian}</h3>
        <p>${word.english}</p>`;
        console.log("rendering", word);

        wordCardElement.classList.add("word-card");
        wordContainerElement.append(wordCardElement);
    });
}

// SORT
function sortFunction() {
    const sortedWords = [...currentWords].sort((a, b) => {
        return a.english.localeCompare(b.english);
    });
    renderWords(sortedWords);
}

// FILTER
function filterFunction() {
    console.log("filter function clicked.");
    const filteredWords = currentWords.filter(word => word.ukrainian[0] === "П");
    renderWords(filteredWords);
}

function resetWords() {
    currentWords = [...wordsData]; // Reset to original
    renderWords(currentWords);
}

function findFunction() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const foundWord = currentWords.find(word =>
        word.ukrainian.toLowerCase() === searchInput ||
        word.english.toLowerCase() === searchInput
    );

    const output = foundWord
        ? `Found: ${foundWord.ukrainian} - ${foundWord.english}`
        : "No match found!";
    renderOutput(output);
}

// Translate (toggle display between Ukrainian and English)
function translateFunction() {
    if (isShowingEnglish) {
        currentWords = currentWords.map(word => ({
            ukrainian: word.english,
            english: word.ukrainian
        }));
        isShowingEnglish = false;
    } else {
        currentWords = [...wordsData]; // Reset to original
        isShowingEnglish = true;
    }

    renderWords(currentWords);
    renderOutput("Switched translation view.");
}

function renderOutput(message) {
    const output = document.getElementById("output");
    output.textContent = message;
}


/*
To practice:
.map objects, arrays, different scenarios etc.

*/