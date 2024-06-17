const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

form.addEventListener(submit, function(event){
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if(name === "" || email === ""){
        alert("please fill in all fields");
        event.preventDefault();
    }

    // this condition only runs if the first condition was false, meaning both name and email are not empty
    else if(!validateEmail(email)){
        alert('Please enter a valid email address.');
        event.preventDefault();  // Prevent form submission
    }
});

function validateEmail(email){
    // Define a regular expression (re) that matches a typical email pattern.
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Test the given email against the regular expression.
    return re.test(email);
}