// getting data with async and fetch

async function getUserData(){
    console.log("Fetching user data...");
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json(); // convert response to usable JSON

    /* before converting to json that can be worked with, the response object looks like this:
    body: ReadableStream,
    headers: {...},
    status: 200,
    ok: true,
    json: function, // a method to parse the body as JSON
     */

}
getUserData();

// using POST

async function createUser(){
    const user = {
        name: "Alice",
        email: "alice@example.com"
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user) // converts the object to a JSON string to send
    });

    const data = await response.json();
    console.log("User created:", data);
}
createUser();