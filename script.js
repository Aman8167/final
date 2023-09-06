document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // You can use an API endpoint to send the registration data to the server.
    // For demonstration purposes, let's assume you have an API endpoint like this:
    const apiUrl = "https://api.example.com/register";
  
    // Assuming the API expects a JSON payload, we can create an object to send the data.
    const data = {
      name: name,
      email: email,
      password: password
    };
  
    // Sending the data to the API using fetch() function (modern way to make HTTP requests).
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(responseData => {
      // Handle the API response here.
      console.log(responseData);
      alert("Registration successful!");
      // You can redirect the user to a "success" page or perform any other action.
    })
    .catch(error => {
      // Handle errors here.
      console.error("Error registering:", error);
      alert("An error occurred during registration.");
    });
  });