const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

form.addEventListener("submit", function(event){
    event.preventDefault();
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if(nameValue == ""){
        alert("Please enter your name");
    }
    else if(emailValue == ""){
        alert("Please enter your email");
    }
    else{
        console.log("Form submitted successfully");
    }
});

