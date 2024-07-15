document.addEventListener("DOMContentLoaded", ()=>{
    const fetchUserBtn = document.getElementById("fetch-user-btn");
    fetchUserBtn.addEventListener("click", fetchUserData);
});

document.addEventListener('DOMContentLoaded', () => {
    const fetchUserBtn = document.getElementById('fetch-user-btn');
    fetchUserBtn.addEventListener('click', fetchUserData);
  });
  
  async function fetchUserData() {
    const url = 'https://randomuser.me/api/';
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      /*
        data is the object returned from the API response when we fetch data asynchronously.
        results is a key in the data object that holds an array of results (in this case, randomly generated users).
        [0] is the first randomly generated user object
      */
      displayUserData(data.results[0]); 
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  
  function displayUserData(user) {
    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = `
      <img src="${user.picture.large}" alt="User Image">
      <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
    `;
  }
  