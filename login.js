document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    fetch('login.json')
      .then(response => response.json())
      .then(data => {

        let user = data.users.find(user => user.username === username && user.password === password);
        if (user) {

          document.getElementById("error-message").textContent = "";
          alert("Login successful! Welcome, " + username);
          localStorage.setItem('currentUser', JSON.stringify(user));
          
          window.location.href = 'dashboard.html';
          // document.getElementById("logUser").textContent = ("Welcome back " + (username));
          // alert("Welcome back " + (username));
        } else {
          document.getElementById("error-message").textContent = "Invalid username or password.";
        }
      })
      .catch(error => console.error('Error loading user data:', error));
  });
  


