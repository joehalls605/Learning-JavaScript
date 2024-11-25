document.addEventListener("DOMContentLoaded", () => {
    const registerButton = document.getElementById("registerButton");
    const statusDiv = document.getElementById("status");

    registerButton.addEventListener("click", ()=>{
        statusDiv.innerHTML = "";
        checkAvailability("checking availability...", (availabilityResult) => {

            statusDiv.innerHTML += `<p>${availabilityResult}</p>`;

            createAccount("creating user account", (createResult) => {
                statusDiv.innerHTML += `<p>${createResult}</p>`
                statusDiv.innerHTML += `<p>registration complete!</p>`
            })
        });
    });

    function checkAvailability(message, callback){
        setTimeout(()=>{
            callback(message + "Username is available");
        }, 1000)
    }

    function createAccount(message, callback) {
        setTimeout(() => {
            callback(message + " User account created.");
        }, 1000);
    }
});
