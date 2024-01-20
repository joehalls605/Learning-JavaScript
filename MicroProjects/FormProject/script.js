// Define the submitForm function
function submitForm() {
    // Get form values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validate form fields
    if (!username || !email || !password) {
        alert("Please fill in all fields");
        return;
    }

    // Display user information
    alert(`Thank you for signing up!\n\nUsername: ${username}\nEmail: ${email}`);

    // Clear form fields
    document.getElementById("signup-form").reset();
}
