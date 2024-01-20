// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {
    // Get the element with the ID "post-list"
    const postList = document.getElementById("post-list");

    // Fetch data from the JSONPlaceholder API
    fetch("https://jsonplaceholder.typicode.com/posts")
        // Parse the response as JSON
        .then(response => response.json())
        // Process the retrieved posts
        .then(posts => {
            // Iterate through the posts
            posts.forEach(post => {
                // Create a new list item for each post
                const listItem = document.createElement("li");
                
                // Set the text content of the list item to the post title
                listItem.textContent = post.title;
                
                // Append the list item to the unordered list
                postList.appendChild(listItem);
            });
        })
        // Handle errors that may occur during the fetch operation
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});
