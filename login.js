document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Retrieve input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Load user data from JSON
    fetch('login.json')
      .then(response => response.json())
      .then(data => {
        // Check if the user exists and the password is correct
        var user = data.users.find(user => user.username === username && user.password === password);
        if (user) {
          // Authentication successful
          document.getElementById("error-message").textContent = "";
          alert("Login successful! Welcome, " + username);
        } else {
          // Authentication failed
          document.getElementById("error-message").textContent = "Invalid username or password.";
        }
      })
      .catch(error => console.error('Error loading user data:', error));
  });
  