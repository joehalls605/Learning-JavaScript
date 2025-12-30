// Frontend

const fetchCruises = async (destination, date) => {
    try {
        const response = await fetch(
            `http://localhost:3000/api/cruises?dest=${destination}&date=${date}`
        );
        const data = response.json();
        console.log("Cruises found", data);
    } catch(error){
        console.log("Error!");
    }
};

fetchCruises("Caribbean", "2025-06-01");
fetchCruises("Alaska", "2025-08-15");