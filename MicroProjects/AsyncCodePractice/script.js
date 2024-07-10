// Function to fetch data from an API asynchronously


function fetchData(){
    const url = 'https://jsonplaceholder.typicode.com/posts/1';

    fetch(url).then(response => {
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        return response.json();
    }).then(data => {
        displayData(data);
    }).catch(error =>{
        console.log("Error fetching data", error);
        document.getElementById("output").innerText = "Error fetching data. Please try again later.";
    });
}

// Function to display fetched data
function displayData(data){
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `    <h2>Post Title: ${data.title}</h2>
        <p>Post Body: ${data.body}</p>`
}