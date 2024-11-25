const wordsData = [
    { ukrainian: "Привіт", english: "Hello" },
    { ukrainian: "Книга", english: "Book" },
    { ukrainian: "Дякую", english: "Thank you" },
    { ukrainian: "Паляниця", english: "Bread" },
    { ukrainian: "Школа", english: "School" }
];

renderWords(wordsData);


function renderWords(data){
    const wordContainerElement = document.getElementById("word-container");
    wordContainerElement.innerHTML = "";

    data.forEach((word)=>{
        const wordCardElement = document.createElement("div");
        wordCardElement.innerHTML = `
        <h3>${word.ukrainian}</h3>
        <p>${word.english}</p>`;
        console.log("rendering", word);

        wordCardElement.classList.add("word-card"); 
        wordContainerElement.append(wordCardElement);
    })
}

// SORT
function sortFunction(){
    const sortedWords = [...wordsData].sort((a,b) => {
        return a.english.localeCompare(b.english);
    });
    renderWords(sortedWords);
}

// FILTER

function filterFunction(){
    console.log("filter function clicked.");
    const filteredWords = wordsData.filter(word => word.ukrainian[0] === "П");
    renderWords(filteredWords);
}