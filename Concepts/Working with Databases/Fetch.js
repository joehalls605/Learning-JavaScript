/*
`fetch` is a JavaScript function used to make network requests (usually HTTP requests) to get or send data between your frontend (web browser) and a server.
It's often used to interact with APIs (like getting data from a server or sending data to a server).
 */

/*
Task:
You want to make a request to a fake API (like the JSONPlaceholder) to fetch a list of posts and display them in the console.
1.Make a request to the JSONPlaceholder API to get a list of posts.
2.Handle the response and convert it to JSON.
3.Log the data to the console.
4.Handle any errors that might occur during the fetch operation.
 */

// 1.

fetch("https://jsonplaceholder.typicode.com/posts").then(response =>{
    // if the response is OK
    if(!response.ok){
        // If the response is not OK, reject the promise with an error
        return Promise.reject("failed to fetch posts");
    }
    // Convert the response to JSON
    return response.json();
}).then(posts => {
    // Log the data (posts) to the console
    console.log("Posts:", posts);
}).catch(error =>{
  console.log("Error", error);
});

// Working with a specific HTTP request

const newPost = {
    title: "My New Post",
    body: "THis is the content",
    userId: 1
}

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newPost)
}).then(response => {
    if(!response.ok){
        return Promise.reject("Failed to create the post.");
    }
    return response.json();
}).then(createdPost => {
    console.log("Created Post:", createdPost);
}).catch(error => {
    // Step 5: Catch any errors and log them
    console.error("Error:", error);
});


