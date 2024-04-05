// Retrieve the currentUser from local storage
let currentUser = localStorage.getItem("currentUser");
// let username = localStorage.getItem("username").value;

// Check if currentUser exists
if (currentUser) {
    // Set the text content of the element with id "logUser"
    document.getElementById("logUser").textContent = "Welcome back " + currentUser;
} else {
    // Handle the case where currentUser doesn't exist in local storage
    console.log("No user found in local storage.");
}


