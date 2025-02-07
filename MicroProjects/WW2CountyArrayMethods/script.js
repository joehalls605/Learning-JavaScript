// Initial World War II Countries Array
let countries = ["Germany", "Italy", "Japan", "United States", "Soviet Union", "United Kingdom", "France", "China"];

// Function to render the countries list
function renderCountries() {
    const countryListElement = document.getElementById('countries');
    countryListElement.innerHTML = ''; // Clear the list before re-rendering

    countries.forEach(country => {
        const listItem = document.createElement('li');
        listItem.textContent = country;
        countryListElement.appendChild(listItem);
    });
}

// Function to add a country
function addCountry() {
    const newCountry = prompt("Enter a new country:");
    if (newCountry) {
        countries.push(newCountry); // Use push() to add to the end of the array
        renderCountries();
    }
}

// Function to remove the last country
function removeCountry() {
    countries.pop(); // Use pop() to remove the last element
    renderCountries();
}

// Function to sort countries alphabetically
function sortCountries() {
    countries.sort(); // Use sort() to alphabetically sort the countries
    renderCountries();
}

// Function to filter countries by a search term
function filterCountries() {
    const term = prompt("Enter a term to filter countries:");
    const filtered = countries.filter(country => country.toLowerCase().includes(term.toLowerCase())); // filter() example
    renderFilteredCountries(filtered);
}

// Render filtered countries
function renderFilteredCountries(filtered) {
    const countryListElement = document.getElementById('countries');
    countryListElement.innerHTML = ''; // Clear the list before re-rendering

    filtered.forEach(country => {
        const listItem = document.createElement('li');
        listItem.textContent = country;
        countryListElement.appendChild(listItem);
    });
}

// Function to find a country
function findCountry() {
    const searchTerm = prompt("Enter the country you're looking for:");
    const foundCountry = countries.find(country => country.toLowerCase() === searchTerm.toLowerCase()); // find() example
    const resultDiv = document.getElementById('search-result');

    if (foundCountry) {
        resultDiv.textContent = `${foundCountry} was found!`;
    } else {
        resultDiv.textContent = `Sorry, no country named ${searchTerm} was found.`;
    }
}

// Initial render of the countries list
renderCountries();
