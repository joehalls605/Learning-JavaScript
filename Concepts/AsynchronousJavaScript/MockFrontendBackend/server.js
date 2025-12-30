const express = require("express");
const app = express();
const PORT = 3000;

// Sample data:
const cruises = [
    { name: "Caribbean Explorer", dest: "Caribbean", date: "2025-06-01" },
    { name: "Mediterranean Adventure", dest: "Mediterranean", date: "2025-07-01" },
    { name: "Alaska Cruise", dest: "Alaska", date: "2025-08-15" }
];

// Route to get cruises
app.get("api/cruises", (req, res) => {
    const { dest, date } = req.query;

    // Filter cruises based on query parameters

    const results = cruises.filter(
        cruise => cruise.dest === dest && cruise.date === date;
    );

    res.json(results)
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));