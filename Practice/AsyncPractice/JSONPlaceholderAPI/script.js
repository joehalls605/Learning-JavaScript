const fetchPostsBtn = document.getElementById("fetchPostsBtn");
const postContainer = document.getElementById('postContainer');

// Defining an async function to fetch posts from JSONPlaceholder

async function fetchPosts(){
    try{

        // Make the API request
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        // Check if the response was successful 
        if(!response.ok){
            throw new Error("failed to fetch posts");
        }

        // Parse the JSON data
        const posts = await response.json();

         // Display each post in the container
        postContainer.innerHTML = posts.slice(0,5).map(post => `
            <div class="post">
                <div class="post-title">${post.title}</div>
                <p>${post.body}</p>
            </div>
            `).join("");    
    } catch(error){
        console.log("Error", error);
        postContainer.innerHTML = `<p>Error fetching posts ${error.message}</p>`
    }
}

fetchPostsBtn.addEventListener("click", fetchPosts);


// JOE LEARN ABOUT AWAIT AFTER.