function loginUser(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
  
    // Demo credentials (replace with backend in real projects)
    if (username === "admin" && password === "1234") {
      // Store session (optional)
      localStorage.setItem("loggedIn", "true");
      // Redirect to showroom
      window.location.href = "index.html";
    } else {
      document.getElementById("error").textContent = "Invalid username or password!";
    }
  
    return false;
  }
  