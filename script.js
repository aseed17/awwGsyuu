document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Fetch the entered username and password
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // You can add your login logic here, e.g., send a request to a server for authentication.
    // For this example, let's just do a simple alert.
    if (username === "Aseed" && password === "Mengwai20") {
      alert("Login successful!");
    } else {
      alert("Invalid username or password.");
    }
  });
  