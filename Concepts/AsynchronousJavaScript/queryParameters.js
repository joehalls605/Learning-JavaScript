/*
Query parameters are extra information you append to a URL to tell the server exactly what data you want.

/path/to/resource?key1=value1&key2=value2&key3=value3

? → starts the query string
key=value → one parameter
& → separates multiple parameters

Example:
/api/cruises?dest=Caribbean&date=2025-06-01&passengers=2

dest → "Caribbean"

date → "2025-06-01"

passengers → "2"


In Express, you access them via req.query:
 */

// Backend:
app.get("/api/cruises", (req, res) => {
    const { dest, date, passengers } = req.query;
    console.log(dest, date, passengers);
    res.json({ dest, date, passengers });
});

// If you fetch /api/cruises?dest=Caribbean&date=2025-06-01&passengers=2

// req.query is always an object where keys are parameter names and values are strings
