const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" }
];

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote-btn");
const copyQuoteBtn = document.getElementById("copy-quote-btn");

// Function to display randomQuote
function displayRandomQuote(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex].text;
}

// Function to copy quote to clipboard
function copyQuoteToClipboard(){
    const text = quoteText.textContent;
    navigator.clipboard.writeText(text).then(() => alert("Quote copied to clipboard")).catch(err => console.error("failed to copy",err));
}


// Event Listeners
newQuoteBtn.addEventListener("click", displayRandomQuote);
copyQuoteBtn.addEventListener("click", copyQuoteToClipboard);